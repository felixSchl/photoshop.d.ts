/// <reference path="./shared.ts"/>
/// <reference path="../contract.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>
/// <reference path="../typings/bennu/bennu.d.ts"/>

/**
 * Parses the 2nd chapter of the Photoshop JavaScript reference into all
 * defined types and their properties and methods.
 */

import * as _ from 'lodash';
import { parse, lang, text } from 'bennu';
import { manyTill, upper, firstBefore, inBraces, inBrackets
       , inParenthesis, startOfLine } from './shared';

/**
 * + Remove page headers
 * + Remove method and propery markers
 * + Remove trailing newlines
 */
export const sanitizeDocs = (docstring) => {
    return _.filter(
          _.foldl(
            [ /Adobe Photoshop (CC|CS6)[\r\n ]*JavaScript Scripting Reference[^0-9]*[0-9]*/g
            , /Method Parameter type Returns What it does( \(Continued\)|)/g
            , /Property Value type What it is( \(Continued\)|)/g
            , /^[ ]*$/gm
            ]
            , (acc, val) => acc.replace(val, '')
            , docstring
          )
          .split('\n')
        , line => line != ''
    ).join('\n');
}

/**
 * A set of reserved typescript keywords
 */
const reservedKeywords = [ 'with', 'as' ];

const escapeName = name =>
    _.contains(reservedKeywords, name)
        ? name + '_'
        : name
;

/**
 * Map javascript types to known typescript / javascript types
 * Ad-hoc fix for typos in docs
 */
const typeMapping = {
      'double':     'number'
    , 'nunber':     'number'
    , 'object':     'any'
    , 'UnitValueX': 'UnitValue'
}

/**
 * A set of known types
 */
const typeWhitelist = [ 'xmpMetadata' ];

/**
 * A set of known "false positives" types, used by "typeStart" parser.
 */
const typeBlacklist = [ 'Methods', 'File' ];

/**
 * Parses a typical identifier
 */
const identifier = parse.label('identifier'
    , text.letter.chain(first =>
        parse.eager(parse.many(text.match(/[a-zA-Z_0-9]/))).chain(rest =>
            parse.always(first + rest.join(''))
        )
    )
);

/**
 * Parses the start of property declarations for a type.
 */
const propertiesMarker =
    parse.sequence(
          text.string('Property Value type What it ')
        , parse.choice(text.string('is'), text.string('does'))
    )
;

/**
 * Parses the start of method declarations for a type.
 */
const methodsMarker =
    text.string('Method Parameter type Returns What it does')
;

/**
 * Parses the start of a new page in the PDF document.
 * Since each top-level type starts on a new page, we can use this parser to
 * help identify top-level types.
 */
const pageHeader = parse.sequence(
      text.string('Adobe Photoshop ')
    , parse.either(
          parse.attempt(text.string('CC'))
        , parse.attempt(text.string('CS6'))
      )
    , parse.many(text.space)
    , parse.sequence(
          text.string('JavaScript Scripting Reference')
        , parse.many(text.anyChar)
      )
);

/**
 * Parses the start of a new top-level type, such as `ActionReference`.
 * A top-level type follows a page header as an capitalized word.
 * Note that there are exclusions to this rule, hence a lookup in a pre-defined
 * "whitelist" becomes necessary.
 *
 * A blacklist is maintained to naiivly filter false positives from coming
 * through.
 */
const typeStart = parse.sequence(
      pageHeader
    , text.character('\n')
    , parse.look(
        parse.sequence(
            parse.choice(
                parse.attempt(parse.eager(parse.cons(
                      text.match(/[A-Z]/)
                    , parse.many(text.match(/[a-zA-Z_0-9]/))
                )).map(xs => xs.join('')))
                ,
                identifier.chain(x =>
                    _.contains(typeWhitelist, x)
                        ? parse.of(x)
                        : parse.fail()
                )
            )
            .chain(typename =>
                _.contains(typeBlacklist, typename)
                    ? parse.fail(`Type in blacklist: ${typename}`)
                    : parse.of(typename)
            )
            , text.character('\n')
        )
    )
);

/**
 * Parses a single referenced type
 * A type is any old identifier, with some special cases:
 * - It may have a range, suffixed as `[0.. 1.. 100]`
 * - It may be an array, denoted as `array of`
 */
const singleType =

    // --------------------------------------------------
    // Parse the array type, given as `array of typename`
    // Also consider `array of array of typename`
    // These types have to resolve to e.g. `typename[][]`
    // --------------------------------------------------
    parse.rec(self =>
        parse.either(
            parse.attempt(
                parse.next(
                      parse.sequence(
                          text.string('array of')
                        , parse.many(text.space)
                      )
                    , parse.either(
                          self
                        , identifier
                      )
                )
            ).map(x => x + '[]')
            ,
            identifier
        )
    )
    .map(name =>
        (name in typeMapping)
            ? typeMapping[name]
            : name
    )
    .chain(name =>
        // ---------------------------------------
        // Parse a range given as `typename [...]`
        // ---------------------------------------
        parse.optional(
            parse.attempt(parse.sequence(
                  parse.many(text.space)
                , lang.then(
                      inBrackets(manyTill(
                          parse.anyToken
                        , text.character(']'))
                      )
                    , parse.optional(text.character('.'))
                  )
            ))
        )
        .chain(range =>
            parse.next(
                parse.optional(parse.attempt(parse.sequence(
                      parse.many(text.space)
                    , text.string('points')
                )))
                ,
                parse.of({
                      name:  name
                    , range: range
                })
            )
        )
    )
;

/**
 * Parses the (n + 1) types following a method.
 * At least n types need to be matched to match each argument to the method,
 * however if a (n + 1)-nth match can be found, identify this as the return
 * type of the method.
 */
const types = (n) => parse.label('types'
    , parse.sequence(
          parse.many(text.space)
        , parse.eager(lang.times(
              n
            , lang.then(
                  multiType
                , parse.many(text.space)
            )
        ))
        .chain(argTypes =>
            parse.optional(
                  null
                , parse.attempt(lang.then(
                      singleType
                    , parse.choice(
                        // ---------------------------------------------------
                        // The parsed return type is the start of a new method
                        // ---------------------------------------------------
                        parse.attempt(parse.sequence(
                              parse.many(text.space)
                            , parse.lookahead(method)
                        ))
                        ,
                        // -----------------------------------------------------
                        // The parsed return type appears to be part of the docs
                        // -----------------------------------------------------
                        parse.attempt(parse.sequence(
                              parse.many(text.space)
                            , parse.lookahead(upper)
                        ))
                    )
                ).map(name => name))
            )
            .chain(returnType =>
                parse.of({
                      argTypes:   argTypes
                    , returnType: returnType
                })
            )
        )
   )
);

/**
 * Parses either "Read-Write" or "Read-Only"
 * Used by property parser
 */
const readwrite = lang.then(
    parse.either(
          text.string('Read-write')
        , text.string('Read-only')
    )
    , text.character('.')
);

/**
 * Parse one or more type names separated by an "or"
 */
const multiType = parse.rec(self =>
    parse.either(
        parse.attempt(lang.then(
              singleType
            , parse.sequence(
                  parse.many(text.space)
                , text.string('or')
                , parse.many(text.space)
            )
        ).chain(x => self.chain(xs => parse.of([x].concat(xs)))))
        ,
        singleType.map(x => [x])
    )
);

/**
 * Parses a single property of shape:
 * name type Read-(Only|Write). ...
 */
const property = identifier.map(escapeName).chain(name =>
    parse.sequence(
          parse.many(text.space)
        , multiType.chain(types =>
            parse.sequence(
                  parse.many(text.space)
                , readwrite.chain(perms =>
                    parse.of({
                          name:  name
                        , type:  types[0]
                        , perms: perms
                    })
                )
            )
        )
    )
);

/**
 * Parses a set of parameters to a function.
 * Handles optional types enclosed in brackets, e.g. `[typename]`
 */
const params = inParenthesis(lang.then(
    parse.rec(self =>
        parse.optional(
            []
            ,
            lang.then(
                parse.choice(
                    parse.attempt(inBrackets(
                        parse.next(
                            parse.optional(parse.sequence(
                                  parse.many(text.space)
                                , text.character(',')
                                , parse.many(text.space)
                            ))
                            ,
                            lang.then(
                                  identifier
                                , parse.optional(
                                    parse.attempt(
                                        parse.many(
                                            text.space
                                  )))
                            )
                        )
                    ).map(x => x + '?'))
                    ,
                    parse.attempt(
                        parse.next(
                              parse.optional(parse.attempt(parse.sequence(
                                    parse.many(text.space)
                                  , text.character(',')
                                  , parse.many(text.space)
                              )))
                            , lang.then(
                                  identifier
                                , parse.optional(parse.attempt(parse.sequence(
                                        parse.many(text.space)
                                      , text.character(',')
                                      , parse.many(text.space)
                                  )))
                              )
                        )
                    )
                )
                ,
                parse.many(text.space)
            )
            .chain(x => self.chain(xs => parse.of([x].concat(xs))))
        )
    )
    ,
    parse.many(text.space)
)).map(names => _.map(names, escapeName))
;

/**
 * Parse a single method on a top-level type.
 * A method is an identifier followed by a set of parameters enclosed in
 * parenthesis.
 */
const method =
    parse.sequence(
          startOfLine
        , identifier.chain(name =>
            parse.sequence(
                  text.character('\n')
                , params.chain(ps =>
                    types(ps.length).chain(ts => parse.of({
                          name:    name
                        , takes:   _.zipObject(ps, ts.argTypes)
                        , returns: ts.returnType
                    }))
                  )
            )
          )
    )
;

/**
 * Parse the properties on a top-level type.
 *
 * The trickiest part of this parser is to parse the documentation for a
 * propery, as there is no clearly defined rule for what a blob of documentation
 * is. We assume the documentation to start after the property declaration and
 * end before another property declaration or before the start of a new
 * top-level type
 */
const properties = parse.rec(self =>
    parse.optional(
          []
        , parse.attempt(
            property.chain(prop =>
                parse.rec(self =>
                    parse.choice(
                        parse.attempt(parse.look(parse.choice<any>(
                              methodsMarker
                            , typeStart
                            , property
                        ))).chain(_ => parse.of([]))
                        ,
                        parse.anyToken.chain(x =>
                            self.chain(xs =>
                                parse.of([x].concat(xs))
                            )
                        )
                    )
                )
                .map(xs => xs.join(''))
                .map(sanitizeDocs)
                .chain(docs => parse.of(_.extend(prop, { 'docs': docs })))
            )
        ).chain(x => self.chain(xs => parse.of([x].concat(xs))))
    )
);

/**
 * Parse the methods on a top-level type.
 *
 * The trickiest part of this parser is to parse the documentation for a method,
 * as there is no clearly defined rule for what a blob of documentation is.
 * We assume the documentation to start after the method declaration and end
 * before another method declaration or before the start of a new top-level type
 */
const methods = parse.rec(self =>
    parse.optional(
          []
        , parse.attempt(
            method.chain(m =>
                parse.rec(self =>
                    parse.choice(
                        parse.attempt(parse.look(parse.either(
                              typeStart
                            , method
                        ))).chain(_ => parse.of([]))
                        ,
                        parse.eof.chain(_ => parse.of([]))
                        ,
                        parse.anyToken.chain(x =>
                            self.chain(xs =>
                                parse.of([x].concat(xs))
                            )
                        )
                    )
                )
                .map(xs => xs.join(''))
                .map(sanitizeDocs)
                .chain(docs => parse.of(_.extend(m, { 'docs': docs })))
            )
        ).chain(x => self.chain(xs => parse.of([x].concat(xs))))
    )
);

/**
 * Parse a single complete type, such as `ActionDescriptor`.
 * This parser will find the name, documentation, properties and methods
 * defined on the type.
 */
const type =
    identifier.chain(name =>
        parse.sequence(
            manyTill(
                  parse.anyToken
                , parse.choice<any>(
                      parse.attempt(propertiesMarker)
                    , parse.attempt(methodsMarker)
                    , parse.attempt(typeStart)
                  )
            )
            .map(sanitizeDocs)
            .chain(docs =>
                parse.optional([]
                    , parse.attempt(
                        parse.sequence(
                              propertiesMarker
                            , parse.many(text.space)
                            , properties
                        )
                    )
                )
                .chain(props =>
                    parse.optional([],
                        parse.attempt(
                            parse.sequence(
                                  firstBefore(methodsMarker, typeStart)
                                , parse.many(text.character(' '))
                                , methods
                            )
                        )
                    )
                    .chain(methods =>
                        parse.of({
                              name:    name
                            , docs:    docs
                            , props:   props
                            , methods: methods
                        })
                    )
                )
            )
        )
    )
;

/**
 * The complete top-down parser for the second chapter to find all top-level
 * types, their documentation, properties and methods
 */
const parseChapter2 = parse.sequence(
    parse.eager(parse.many(
        lang.then(
              parse.sequence(
                  pageHeader
                , parse.many(text.character('\n'))
                , type
              )
            , parse.many(parse.choice(text.space, parse.eof))
        )
    ))
);

export const parser: parse.Parser<ITopLevelType[]> = parseChapter2;
