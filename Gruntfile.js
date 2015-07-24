'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        run: {
            options: {}
          , cc: {
                cmd: 'node'
              , args: [ 'app.js', 'cc' ]
            }
          , cs6: {
                cmd: 'node'
              , args: [ 'app.js', 'cs6' ]
            }
        }
      , ts: {
            options: {
                verbose: true
              , sourceMap: false
              , compiler: './node_modules/typescript/bin/tsc'
            }
          , default: {
                options: {
                    module: 'commonjs'
                }
              , files: {
                  './': ['app.ts']
                }
            }
          , testCC: { files: { './': [ 'dist/cc/**' ] } }
          , testCS6: { files: { './': [ 'dist/cc/**' ] } }
        }
    });

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('build', ['ts']);
    grunt.registerTask('convert', ['run:cc', 'run:cs6']);
    grunt.registerTask('test', ['ts:testCC', 'ts:testCS6']);
    grunt.registerTask('default', ['build', 'convert', 'test']);
};
