     module.exports = function(grunt) {
         grunt.initConfig({
            watch: {
                files: "less/*",
                tasks: ["less"]
             },
            less: {
                development: {
                    options: {
                        ompress: true,
                        yuicompress: true,
                        optimization: 2,
                        sourceMap: true,
                        sourceMapFilename: 'css/main.css.map', // where file is generated and located
                        sourceMapURL: 'main.css.map', // the complete url and filename put in the compiled css file
                        //sourceMapBasepath: '', // Sets sourcemap base path, defaults to current working directory.
                        sourceMapRootpath: '/', // adds this path onto the sourcemap filename and less file paths
                    },
                    files: {"css/theme.css": "less/theme.less"}
                }
             },
            autoprefixer: { //run to get latest caniuse update npm update caniuse-db
                main: {
                    src: 'css/theme.css',
                    dest: 'css/theme.css'
                 }
             },
           cssmin: {
                target: {
                    files: [{
                      expand: true,
                      cwd: 'css',
                      src: ['theme.css'],
                      dest: 'css',
                      ext: '.min.css'
                    }]
              }
            },
            browserSync: {
                bsFiles: {
                    src : ['css/*.css',
                           './*.html' 
                    ]
                },

                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                    //proxy: "localhost:8888"
                }
            }

         });
         grunt.loadNpmTasks('grunt-contrib-watch');
         grunt.loadNpmTasks('grunt-contrib-less');
         grunt.loadNpmTasks('grunt-autoprefixer');
         grunt.loadNpmTasks('grunt-contrib-cssmin');
         grunt.loadNpmTasks('grunt-browser-sync');
         grunt.registerTask('default', ['browserSync','less', 'watch']);
     };