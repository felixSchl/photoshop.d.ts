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

/*
 * Derive all permutations of a list recursively.
 * Note: This function will only work on relatively small lists due to the
 *       lack of tco. FIXME: Use trampolines.
 */
var permutate = <T>(xs:T[][]):any[] => {
    var ts   = _.head(xs) || [];
    var rest = _.rest(xs);

    return rest.length == 0
        ? [ts]
        : _.flatten(
              _.map(permutate(rest), rs => _.map(ts, t => ([t].concat(rs))))
            , true
          )
    ;
}

/*
 * Derive the list of all method permutations for method overloading.
 */
var getMethodPermutations = method =>
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

var renderMethod = (method, indentLevel = 0) =>
    [ method.docs ? renderDocstring(method.docs, indentLevel) : ""
    ,
    _(
        _.map(getMethodPermutations(method), (params:any[]) =>
            _.map(params, (value, key) => _.template(
                  "${ name }: ${ type }"
                , { name: key
                  , type: value.name
                  }
                )
            )
        )
    )
    .map(xs => _.template(
          "${name}(${params}): ${type}"
        , { name:   method.name
          , params: xs.join(", ")
          , type:   method.returns ? method.returns.name : "void"
          }
        )
    )
    .map(x => strRepeat(" ", tabSize*indentLevel) + x)
    .reduce(
        (acc, val) =>
              acc == ""
            ? val
            : acc + "\n" + val
        , ""
    )].join("\n")
;

var renderProperty = (property, indentLevel = 0) =>
    [ renderDocstring(property.docs, indentLevel)
    , _(lines(_.template(
          "${ name }: ${ type }"
        , { name: property.name
          , type: property.type.name
          }
      )))
        .map(x => strRepeat(" ", tabSize*indentLevel) + x)
        .value()
    ].join("\n")
;

var renderType = type =>
    _.flatten(
    [ _.template("interface ${ name } {", { name: type.name })
    , _.map(type.props,   m => renderProperty(m, 1) + "\n")
    , _.map(type.methods, m => renderMethod(m, 1)   + "\n")
    , "}"
    ], true)
    .join("\n")
;

export var render = types =>
    _(types)
        .map(renderType)
        .value()
        .join("\n\n")
;
