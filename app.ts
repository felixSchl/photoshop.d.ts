/// <reference path="./typings/node/node.d.ts"/>
/// <reference path="./typings/lodash/lodash.d.ts"/>
/// <reference path="./typings/bennu/bennu.d.ts"/>
/// <reference path="./parsers/index.ts"/>
/// <reference path="./renderers/index.ts"/>

import _     = require("lodash");
import bennu = require("bennu");
import parse = bennu.parse;
import lang  = bennu.lang;
import text  = bennu.text;
var    fs    = require("fs-extra");
var    wrap  = require("wordwrap");

var validTargets = [ "cc", "cs6" ];
var target       = process.argv[2];
if (_.contains(validTargets, target) == false) {
    console.error(target
        ? "Invalid target: `" + target + "`"
        : "No target specified!"
    );
    console.error(
        [ "Valid targets are:"
        , _.map(validTargets, target => "`" + target + "`").join(", ")
        ].join(' ')
    );
    process.exit(1);
}

console.log("Processing `Adobe Photoshop " + target.toUpperCase() +  "`...")

import parsers   = require("./parsers/index");
import renderers = require("./renderers/index");
import renderTypescriptFile = renderers.renderTypescriptFile;

var chapter2 = fs.readFileSync("assets/"+target+"/chapter-2.txt", "utf8");
var chapter4 = fs.readFileSync("assets/"+target+"/chapter-4.txt", "utf8");

var compileTypes = output =>
    _([chapter2])
        .map(input => {
            console.log("Parsing types...");
            return parsers.parseTypes(input)
        })
        .map(types => {
            console.log("Rendering types...");
            return renderTypescriptFile(
                  []
                , renderers.renderTypes
                , types
            );
        })
        .each(contents => {
            console.log("Emitting types...");
            fs.writeFile(output, contents);
        })
    ;

var compileConstants = output =>
    _([chapter4])
        .map(input => {
            console.log("Parsing constants...");
            return parsers.parseConstants(input)
        })
        .map(constants => {
            console.log("Rendering constants...");
            return renderTypescriptFile(
                  []
                , renderers.renderConstants
                , constants
            );
        })
        .each(contents => {
            console.log("Emitting constants...");
            fs.writeFile(output, contents);
        })
    ;

var copyDistFiles = targetDir => {
    console.log("Copying files...");
    fs.copySync("ps.d.ts", targetDir+"/ps.d.ts")
    fs.copySync("assets/lib.d.ts", targetDir+"/lib.d.ts")
    fs.copySync("extendscript/es.d.ts", targetDir+"/es.d.ts")
    fs.copySync("extendscript/es.dollar.d.ts", targetDir+"/es.dollar.d.ts")
    fs.copySync("extendscript/es.file.d.ts", targetDir+"/es.file.d.ts")
    fs.copySync("extendscript/es.global.d.ts", targetDir+"/es.global.d.ts")
}

var mkDistDir = (targetDir) => {
    console.log("Making dir...");
    try { fs.mkdirsSync(targetDir); } catch (e) {}
    return targetDir;
}

try {
    var distDir = mkDistDir("dist/"+target);
    compileTypes(distDir+"/ps.types.d.ts");
    compileConstants(distDir+"/ps.constants.d.ts");
    copyDistFiles(distDir)
} catch(e) {
    console.error("ERROR", e);
    console.error("STACK", e.stack);
}
