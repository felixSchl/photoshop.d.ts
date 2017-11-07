/// <reference path="./shared.ts"/>
/// <reference path="../contract.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>
/// <reference path="../typings/bennu/bennu.d.ts"/>

/**
 * Parses the chapter on Scripting constants from the Photoshop javascript
 * reference.
 */

import * as _ from 'lodash';
import { parse, lang, text } from 'bennu';
import { manyTill, upper, firstBefore, inBraces, inBrackets
       , inParenthesis, startOfLine } from './shared';

const typename =
    parse.eager(parse.cons(
          text.match(/[A-Z]/)
        , parse.many(text.match(/[a-zA-Z_0-9]/))
    )).map(xs => xs.join(''))
;

const member =
    lang.then(
          parse.eager(parse.cons(
              text.match(/[A-Z]/)
            , parse.many(text.match(/[A-Z_0-9]/))
          )).map(xs => xs.join(''))
        , parse.look(parse.either(text.character('\n'), parse.eof))
    )
;

const constant = parse.sequence(
      startOfLine
    , typename.chain<IEnum>(name =>
        parse.sequence(
              parse.many(text.character(' '))
            , parse.eager(parse.many1(
                parse.attempt(lang.then(member, text.character('\n')))
              ))
        )
        .chain(members => parse.of({
              name:    name
            , members: members
            , docs:    ''
        }))
    )
);

const constants = parse.rec<IEnum[]>(self =>
    parse.optional(
          []
        , parse.attempt(
            constant.chain(c =>
                parse.rec(self =>
                    parse.choice(
                        parse.attempt(
                            parse.look(constant)).chain(_ => parse.of([])
                        )
                        ,
                        parse.anyToken.chain(x =>
                            self.chain(xs =>
                                parse.of([x].concat(xs))
                            )
                        )
                        ,
                        parse.eof.chain(_ => parse.of([]))
                    )
                )
                .map(xs => xs.join(''))
                .chain(docs => parse.of(_.extend(c, { 'docs': docs })))
            )
        ).chain(x => self.chain(xs => parse.of([x].concat(xs))))
    )
);

const parseChapter4 = constants;

export const parser = parseChapter4;
