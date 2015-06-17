module.exports = function(grunt) {

    // load time-grunt and all grunt plugins found in the package.json
    require('jit-grunt')(grunt);

    // grunt config
    grunt.initConfig({

        // Sass
        sass: {
            options: {
                'outputStyle': 'compressed'
            },
            main: {
                files: [{
                    'css/style.css': '_scss/style.scss'
                }]
            }
        },

        // Browser Sync
        browserSync: {
            dev: {
                bsFiles: {
                    src : ["_site/*.*"]
                },
                options: {
                    port: 7669, // snow on phone keypad
                    open: true, // Opens site in your default browser, no need to remember the port
                    notify: false,
                    watchTask: true,
                    injectChanges: false,
                    server: {
                        baseDir: '_site'
                    }
                }
            }
        },

        // Shell commands
        shell: {
            jekyllBuild: {
                command: 'bundle exec jekyll build --config _config.yml,_config.dev.yml'
            }
        },


        // Watch files
        watch: {
            sass: {
                files: [
                    // Including
                    '_scss/style.scss',
                    '_scss/**/*.scss'
                ],
                tasks: ['sass'],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            },
            jekyll: {
                files: [
                    '*.html',
                    '*.css',
                    '*.js',
                    '*.md',
                    '*.json',
                    '**/*.html',
                    '**/*.css',
                    '**/*.js',
                    '**/*.md',
                    '**/*.json',
                    '_config.yml',
                    '_config.dev.yml'
                ],
                tasks: ['shell:jekyllBuild'],
                options: {
                    interrupt: false,
                    atBegin: true
                }
            }
        }
    });

    // The dev task will be used during development
    grunt.registerTask('default', ['browserSync', 'watch']);

};