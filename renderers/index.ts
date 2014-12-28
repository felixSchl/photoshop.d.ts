/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>
/// <reference path="./shared.ts"/>
/// <reference path="./types.ts"/>

import _         = require("lodash");
import types     = require("./types");
import constants = require("./constants");
import shared    = require("./shared");

export var renderTypes     = xs => types.render(xs);
export var renderConstants = xs => constants.render(xs);

var strRepeat = shared.strRepeat;

var renderHeader = () => [
      strRepeat("/", 80)
    , "//"
    , "// This file was generated. Do not modify."
    , "//"
    , strRepeat("/", 80)
].join("\n")

export var renderTypescriptFile = (references, render, contents) =>
    _.flatten(
        [ renderHeader()
        , ""
        ,  _.map(references, path =>
            _.template(
                  "/// <reference path=\"${ path }\" />"
                , { path: path }
            )
          )
        , ""
        , render(contents)
        ]
    , true).join("\n")

