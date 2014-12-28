/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>
/// <reference path="../typings/bennu/bennu.d.ts"/>

import _     = require("lodash");
import bennu = require("bennu");
import parse = bennu.parse;
import lang  = bennu.lang;
import text  = bennu.text;

export var manyTill = (p, end) => parse.rec(self =>
    parse.either(
          parse.attempt(parse.lookahead(end)).map(x => [])
        , p.chain(x => self.chain(xs => parse.of(x.concat(xs))))
    )
);

export var firstBefore = (parser, marker) => parse.rec(self =>
    parse.choice(
          parse.attempt(parse.lookahead(marker))
            .chain(_ => parse.fail("Not found"))
        , parse.attempt(parser)
        , parse.sequence(parse.anyToken, self)
    )
);

export var lower = parse.token(x => x === x.toLowerCase());
export var upper = parse.token(x => x === x.toUpperCase());

export var word = text.letter.chain(
    x => parse.eager(parse.many(text.letter)).chain(
        xs => parse.of(x + xs.join(""))
    )
);

export var betweenChar = (open, close, parser) =>
    lang.between(
          text.character(open)
        , text.character(close)
        , parser
    )
;
export var inBraces      = (p) => betweenChar("{","}",p);
export var inBrackets    = (p) => betweenChar("[","]",p);
export var inParenthesis = (p) => betweenChar("(",")",p);

export var startOfLine =
    parse.either(
        parse.attempt(text.character("\n"))
      , parse.attempt(parse.getPosition.chain(pos =>
          pos.index == 0
              ? parse.of({})
              : parse.fail()
        ))
    )
;
