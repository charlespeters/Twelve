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
        target:{
            options: {
                port: 9001,
            }
        }
    },
	sass: {                              // Task
    	dist: {                            // Target
			options: {                       // Target options
				style: 'compressed'
      },
      files: {                         // Dictionary of files
        'css/main.css': 'scss/main.scss'       // 'destination': 'source'
      }
    }
  },
  watch: {
      options: {
      livereload: true,
    },
  css: {
    files: ['scss/*.scss', 'scss/libs/*.scss', 'scss/partials/*.scss'],
    tasks: ['sass'],
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
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');


  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);
  grunt.registerTask('dev', ['connect', 'watch']);


};