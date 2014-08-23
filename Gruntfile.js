module.exports = function(grunt) {
    // Project configuration.

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                },
                files: {
                    'dist/css/twelve.css': 'src/twelve/twelve.scss',
                    'dist/css/app.css': 'src/app.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 8', 'ie 9']
            },
            single_file: {
                src: 'dist/css/twelve.css',
                dest: 'dist/css/twelve.prefixed.css'
            },
        },
        cssmin: {
            minify: {
                src: 'dist/css/twelve.prefixed.css',
                dest: 'dist/css/twelve.min.css',
            }
        },
        connect: {
            server: {
              options: {
                port: 9001,
                base: 'dist/',
                open: true,
                livereload: true
              }
            }
        },
        bake: {
            your_target: {
                files: {
                    'dist/index.html': 'src/index.html'
                }
            },
        },
        watch: {
            html: {
                files: ['src/*.html', 'src/inc/*.html'],
                tasks: ['bake'],
                options: { livereload: 35729 }
            },
            css: {
                files: ['src/*.scss','src/twelve/*.scss','src/twelve/**/*.scss'],
                tasks: ['sass', 'autoprefixer', 'cssmin'],
                options: { livereload: 35729 }
            },
        },
    });

    // Loaded tasks
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
    grunt.loadNpmTasks( 'grunt-contrib-connect' );
    grunt.loadNpmTasks( 'grunt-autoprefixer' );
    grunt.loadNpmTasks( 'grunt-notify' );
    grunt.loadNpmTasks( 'grunt-bake' );

    // Registered task(s).
    grunt.registerTask('default', ['notify']);
    grunt.registerTask('build', ['sass', 'autoprefixer', 'cssmin', 'bake']);
    grunt.registerTask('dev', ['connect', 'watch']);
};
