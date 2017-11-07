/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>

const _ = require('lodash');
const wrap = require('wordwrap');

export const lines   = str => str.split('\n');
export const unlines = xs  => xs.join('\n');

export const tabSize = 4;
export const repeat = (x, n) => _.map(_.range(0, n), _ => x);
export const strRepeat = (x, n) => repeat(x, n).join('');

export const renderDocstring = (docs='', indentLevel=0) =>
    _(lines(wrap(80 - indentLevel*tabSize - 2)(docs.replace(/\n/g, ' '))))
        .map((x:string) => x.trim())
        .map(x => ' * ' + x)
        .tap(xs => {
            const ys = ['/**'].concat(xs).concat([' */']);
            xs.length = 0;
            _.map(ys, y => xs.push(y));
        })
        .map(x => strRepeat(' ', tabSize*indentLevel) + x)
        .value()
        .join('\n')
;
