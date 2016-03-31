/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/bennu/bennu.d.ts"/>
/// <reference path="./shared.ts"/>
/// <reference path="./types.ts"/>

import * as bennu     from 'bennu';
import * as types     from  './types';
import * as constants from  './constants';

export const parseTypes     = input => bennu.parse.run(types.parser, input);
export const parseConstants = input => bennu.parse.run(constants.parser, input);
