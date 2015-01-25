module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
        options: {
            verbose: true
          , sourceMap: false
          , compiler: './node_modules/typescript/bin/tsc'
        }
      , default : {
          options: {
              module: "commonjs"
          }
        , files: {
            "./": ["app.ts"]
          }
        }
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.registerTask("default", ["ts"]);
};
