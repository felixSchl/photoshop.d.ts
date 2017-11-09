/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>
/// <reference path="../contract.d.ts"/>
/// <reference path="./shared.ts"/>

const _ = require('lodash');
import { renderDocstring, strRepeat, tabSize, lines } from './shared';

/**
 * Derive all permutations of a list recursively.
 * Note: This function will only work on relatively small lists due to the
 *       lack of tco. FIXME: Use trampolines.
 */
const permutate = <T>(xs:T[][]):any[] => {
    const ts   = _.head(xs) || [];
    const rest = _.rest(xs);

    return rest.length == 0
        ? [ts]
        : _.flatten(
              _.map(permutate(rest), rs => _.map(ts, t => ([t].concat(rs))))
            , true
          )
    ;
}

/**
 * Derive the list of all method permutations for method overloading.
 */
const getMethodPermutations = method =>
    _(
        permutate(_.map(method.takes, (ts:any[],k,__) =>
            _.map(ts, t => [k, t])
        ))
    )
    .map(xs => _.map(xs, x => _.object([x[0]], [x[1]])))
    .map(xs => _.flatten(xs, true))
    .map(xs => _.reduce(xs, (acc, value) => _.merge(acc, value), {}))
    .value()
;

const renderMethod = (method, indentLevel = 0) =>
    [ method.docs ? renderDocstring(method.docs, indentLevel) : ""
    ,
    _(
        _.map(getMethodPermutations(method), (params:any[]) =>
            _.map(params, (value, key) => _.template(
                  '${name}: ${type}'
                , { name: key
                  , type: value.name
                  }
                )
            )
        )
    )
    .map(xs => _.template(
          '${name}(${params}): ${type}'
        , { name:   method.name
          , params: xs.join(', ')
          , type:   method.returns ? method.returns.name : 'void'
          }
        )
    )
    .map(x => strRepeat(' ', tabSize*indentLevel) + x)
    .reduce(
        (acc, val) =>
              acc == ''
            ? val
            : acc + '\n' + val
        , ''
    )].join('\n')
;

const renderProperty = (property, indentLevel = 0) =>
    [ renderDocstring(property.docs, indentLevel)
    , _(lines(_.template(
          '${perms}${name}: ${type}'
        , { name: property.name
          , type: property.type.name
          , perms: (property.perms == 'Read-only') ? 'readonly ' : ''
          }
      )))
        .map(x => strRepeat(' ', tabSize*indentLevel) + x)
        .value()
    ].join('\n')
;

const renderType = type =>
    _.flatten(
    [ _.template(
        '${declaration} ${name} {'
        , { declaration: 
            type.props.some(function(property) {return (property.name == 'parent')}) 
            || (type.name == "Application")
            || (type.name == "UnitValue")
            || (type.name.indexOf("Measurement") !== -1) 
            ? 'interface' : 'declare class'
          , name: type.name
        }
    )
    , _.map(type.props,   m => renderProperty(m, 1) + '\n')
    , _.map(type.methods, m => renderMethod(m, 1)   + '\n')
    , '}'
    ], true)
    .join('\n')
;

export const render = types =>
    _(types)
        .map(renderType)
        .value()
        .join('\n\n')
;
