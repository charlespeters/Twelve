module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			build: {
				src: 'js/libs/*.js',
				dest: 'js/builds/global.min.js'
			}
		},
		connect: {
			target: {
				options: {
					port: 9001,
				}
			}
		},
		sass: { // Task
			dist: { // Target
				options: { // Target options
					style: 'expanded'
				},
				files: { // Dictionary of files
					'css/twelve.css': 'scss/main.scss' // 'destination': 'source'
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 version', 'ie 8', 'ie 9']
			},
			single_file: {
				src: 'css/twelve.css',
				dest: 'css/twelve.prefixed.css'
			},
		},
		cssmin: {
			minify: {
				src: 'css/twelve.prefixed.css',
				dest: 'css/twelve.min.css',
			}
		},
		watch: {
			options: {
				livereload: true,
			},
			css: {
				files: ['scss/*.scss', 'scss/libs/*.scss', 'scss/partials/*.scss'],
				tasks: ['sass', 'autoprefixer', 'cssmin'],
				options: {
					livereload: true,
				},
			},
			js: {
				files: ['js/libs/*.js', 'js/*.js'],
				tasks: ['uglify'],
				options: {
					livereload: true,
				},
			}
		}
	});
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-notify');
	// Default task(s).
	grunt.registerTask('default', ['uglify', 'sass']);
	grunt.registerTask('dev', ['connect', 'watch']);
};