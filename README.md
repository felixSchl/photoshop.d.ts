# Photoshop.d.ts

[![npm version](https://badge.fury.io/js/photoshop.d.ts.svg)](http://badge.fury.io/js/photoshop.d.ts)
[![Build Status](https://travis-ci.org/felixSchl/photoshop.d.ts.svg)](https://travis-ci.org/felixSchl/photoshop.d.ts)
![dependencies status](https://david-dm.org/felixschl/photoshop.d.ts.svg)

**Type-safe Photoshop scripting**

This project aims to create and maintain TypeScript declaration files for Adobe
ExtendScript, focussed on Photoshop. It enables you to write Photoshop scripts
with the power and safety of TypeScript.

Features:

* TypeScript type safety for ExtendScript projects
* View ExtendScript object documentation in-place for various code editors
* Live type checking, code completion, parameter info, quick info, and member
lists for ExtendScript objects with e.g. IntelliSense

Demo:

![Alt text](demo.gif?raw=true "Title")

## Getting Started

Prerequisites: node, npm and TypeScript (2.4+) are installed.

1. Install photoshop.d.ts using `npm` in your project folder:

```shell
npm install --save-dev photoshop.d.ts
```

2. Add a `tsconfig.json` to your project with the following recommended
settings and modify it to your needs: 

```js
{
    "compilerOptions": {
        // Output config
        "outFile": "./app.jsx",
        "sourceMap": false,
        "target": "es3",

        // Module resolution
        "module": "none",

        // JS handling
        "allowJs": true,
        "checkJs": false,
        "downlevelIteration": true,

        // Type checking
        "strict": true,
        "noLib": false,
        "lib": ["es5"], // exclude DOM and ScriptHost
        
        // Include photoshop.d.ts type definitions
        "types": ["./photoshop.d.ts/dist/cc"]
        // Alternatively for Photoshop CS6:
        // "types": ["./photoshop.d.ts/dist/cs6"]
    },
     "include": [
        "./app.ts"
    ]
}
```

Note: If you want to use modules in ExtendScript, you need a module loader like
<a href="https://github.com/requirejs/requirejs" target="_blank">requirejs</a>
and set the module option to `"amd"`. The setup of requirejs for ExtendScript
requires some configuration.

## ECMAScript version and JavaScript Polyfills

Adobe ExtendScript is based on ECMAScript version 3. Hence the `target` option
in the `tsconfig.json` should be set to `es3`. TypeScript will transpile your
code into valid ES3 syntax, though it won't transpile any *methods* like ES5
`somearray.forEach` or `.filter` into ES3 for you. 

You can use ECMAScript 5 features by adding polyfills to your project. The <a 
href="https://github.com/inexorabletash/polyfill" target="_blank">es5.js 
polyfill</a> for example works fine with ExtendScript. To prepend a polyfill
to your output file, follow these instructions:

1. Download es5.js and place it into your project folder.
1. Assure `checkJS` ist set to `false` in your `tsconfig.json` when using a 
JS polyfill library.
1. Link the polyfill in the `files` section of your `tsconfig.json`: 

```js
{   
    // ...
    "files": [
        "./somefolder/es5.js"  // prepends ES5 polyfill to jsx output file
    ]
}
```

Note: You can also restrict your use of JS functions to an ES3 level in
TypeScript and replace the built-in ES5 standard lib with an <a href="https://github.com/saschanaz/TypeScript/blob/es3-d-ts/src/lib/es3.d.ts" target="_blank">ES3 declaration file</a>
manually.

# For developers

## Building

The TypeScript declarations are generated from the official JavaScript
reference PDFs. The text is copied and pasted into local files. The parser will
parse the raw text file and extract meaningful information from the respective
chapters of the documentation. Once the parser has delivered an in-memory
representation of the types and constants, the emitter will render types and
constants as TypeScript files. After cloning this repository, install
dependencies and test it by calling:

```shell
npm install && npm test
```

## Notes

The [parsers][parsers] do a pretty good job, although some manual fix-ups need
to be made to the raw text documents before parsing (remove typos, inconsistent
array notations etc.). Since the source docs rarely change, they are committed
to this project and maintained here. 

[parsers]: https://github.com/felixSchl/photoshop.d.ts/tree/master/parsers

# License

This project is licensed under the [BSD 2-Clause License](LICENSE).
