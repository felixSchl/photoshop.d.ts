/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>

import _ = require("lodash");

export var wrap = require("wordwrap");

export var lines   = str => str.split("\n");
export var unlines = xs  => xs.join("\n");

export var tabSize = 4;
export var repeat = (x, n) => _.map(_.range(0, n), _ => x);
export var strRepeat = (x, n) => repeat(x, n).join("");

export var renderDocstring = (docs = "", indentLevel = 0) =>
    _(lines(wrap(80 - indentLevel*tabSize - 2)(docs.replace(/\n/g, ' '))))
        .map((x:string) => x.trim())
        .map(x => " * " + x)
        .tap(xs => {
            var ys = ["/*"].concat(xs).concat([" */"]);
            xs.length = 0;
            _.map(ys, y => xs.push(y));
        })
        .map(x => strRepeat(" ", tabSize*indentLevel) + x)
        .value()
        .join("\n")
;
