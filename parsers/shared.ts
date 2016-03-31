/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>
/// <reference path="../typings/bennu/bennu.d.ts"/>

import * as _ from 'lodash';
import { parse, lang, text } from 'bennu';

export const manyTill = (p, end) => parse.rec(self =>
    parse.either(
          parse.attempt(parse.lookahead(end)).map(x => [])
        , p.chain(x => self.chain(xs => parse.of(x.concat(xs))))
    )
);

export const firstBefore = (parser, marker) => parse.rec(self =>
    parse.choice(
          parse.attempt(parse.lookahead(marker))
            .chain(_ => parse.fail("Not found"))
        , parse.attempt(parser)
        , parse.sequence(parse.anyToken, self)
    )
);

export const lower = parse.token(x => x === x.toLowerCase());
export const upper = parse.token(x => x === x.toUpperCase());

export const word = text.letter.chain(
    x => parse.eager(parse.many(text.letter)).chain(
        xs => parse.of(x + xs.join(""))
    )
);

export const betweenChar = (open, close, parser) =>
    lang.between(
          text.character(open)
        , text.character(close)
        , parser
    )
;
export const inBraces      = (p) => betweenChar("{","}",p);
export const inBrackets    = (p) => betweenChar("[","]",p);
export const inParenthesis = (p) => betweenChar("(",")",p);

export const startOfLine =
    parse.either(
        parse.attempt(text.character("\n"))
      , parse.attempt(parse.getPosition.chain(pos =>
          pos.index == 0
              ? parse.of({})
              : parse.fail()
        ))
    )
;
