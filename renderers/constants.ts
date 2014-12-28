/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>
/// <reference path="../contract.d.ts"/>
/// <reference path="./shared.ts"/>

import _      = require("lodash");
import shared = require("./shared");

var renderDocstring = shared.renderDocstring;
var strRepeat       = shared.strRepeat;
var tabSize         = shared.tabSize;
var lines           = shared.lines;

var indent = (lines, level) =>
    _.map(lines, line => strRepeat(" ", tabSize*level) + line)
;

var renderEnum = enum_ =>
    _.flatten(
    [ renderDocstring(enum_.docs, 0)
    , _.template("declare enum ${ name } {", { name: enum_.name })
    , indent(lines(enum_.members.join(",\n")), 1)
    , "}"
    ]
    , true)
    .join("\n")
;

export var render = constants =>
    _(constants)
        .map(renderEnum)
        .value()
        .join("\n\n")
