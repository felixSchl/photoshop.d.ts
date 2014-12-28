/// <reference path="./shared.ts"/>
/// <reference path="../contract.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>
/// <reference path="../typings/bennu/bennu.d.ts"/>

/*
 * Parses the chapter on Scripting constants from the Photoshop javascript
 * reference.
 */

import _     = require("lodash");
import bennu = require("bennu");
import parse = bennu.parse;
import lang  = bennu.lang;
import text  = bennu.text;

import shared     = require("./shared");
var manyTill      = shared.manyTill;
var upper         = shared.upper;
var firstBefore   = shared.firstBefore;
var inBraces      = shared.inBraces;
var inBrackets    = shared.inBrackets;
var inParenthesis = shared.inParenthesis;
var startOfLine   = shared.startOfLine;

var typename =
    parse.eager(parse.cons(
          text.match(/[A-Z]/)
        , parse.many(text.match(/[a-zA-Z_0-9]/))
    )).map(xs => xs.join(""))
;

var member =
    lang.then(
          parse.eager(parse.cons(
              text.match(/[A-Z]/)
            , parse.many(text.match(/[A-Z_0-9]/))
          )).map(xs => xs.join(""))
        , parse.look(parse.either(text.character("\n"), parse.eof))
    )
;

var constant = parse.sequence(
      startOfLine
    , typename.chain<IEnum>(name =>
        parse.sequence(
              parse.many(text.character(" "))
            , parse.eager(parse.many1(
                parse.attempt(lang.then(member, text.character("\n")))
              ))
        )
        .chain(members => parse.of({
              name:    name
            , members: members
            , docs:    ""
        }))
    )
);

var constants = parse.rec<IEnum[]>(self =>
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
                .map(xs => xs.join(""))
                .chain(docs => parse.of(_.extend(c, { "docs": docs })))
            )
        ).chain(x => self.chain(xs => parse.of([x].concat(xs))))
    )
);

var parseChapter4 = constants;

export var parser = parseChapter4;
