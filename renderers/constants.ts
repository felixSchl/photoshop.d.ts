/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>
/// <reference path="../contract.d.ts"/>
/// <reference path="./shared.ts"/>

import * as _ from 'lodash';
import { renderDocstring, strRepeat, tabSize, lines } from './shared';

const indent = (lines, level) =>
    _.map(lines, line => strRepeat(' ', tabSize*level) + line)
;

const renderEnum = enum_ =>
    _.flatten(
    [ renderDocstring(enum_.docs, 0)
    , _.template('declare enum ${ name } {', { name: enum_.name })
    , indent(lines(enum_.members.join(',\n')), 1)
    , '}'
    ]
    , true)
    .join('\n')
;

export const render = constants =>
    _(constants)
        .map(renderEnum)
        .value()
        .join('\n\n')
