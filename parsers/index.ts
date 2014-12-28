/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/bennu/bennu.d.ts"/>
/// <reference path="./shared.ts"/>
/// <reference path="./types.ts"/>

import bennu = require("bennu")

import types     = require("./types");
import constants = require("./constants");

export var parseTypes     = input => bennu.parse.run(types.parser, input);
export var parseConstants = input => bennu.parse.run(constants.parser, input);

export var runTest = types.runTest;
