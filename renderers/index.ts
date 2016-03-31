/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>
/// <reference path="./shared.ts"/>
/// <reference path="./types.ts"/>

import * as _         from 'lodash';
import * as types     from './types';
import * as constants from './constants';
import { strRepeat }  from './shared';

export const renderTypes     = types.render;
export const renderConstants = constants.render;

const renderHeader = () => [
      strRepeat('/', 80)
    , '//'
    , '// This file was generated. Do not modify.'
    , '//'
    , strRepeat('/', 80)
].join('\n')

export const renderTypescriptFile = (references, render, contents) =>
    _.flatten(
        [ renderHeader()
        , ''
        ,  _.map(references, path => `/// <reference path="${path}" />`)
        , ''
        , render(contents)
        ]
    , true).join('\n')

