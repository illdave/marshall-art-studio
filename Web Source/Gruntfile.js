/**
 * This grunt file (see: http://gruntjs.com/) can combine, minify, and generate sourcemaps for javascript and less files. 
 * To use it, simply download and install node.js (at least version 0.10),
 * run the npm install command at this directory, then run the grunt command to execute the build's default task. 
 * Make sure you add the generated 'node_modules' directory to svn:ignore 
 *
 *
 * This build file assumes a certain project directory structure. Please update this file if your project structure must differ from the following:
 * 
 * 	Project
 * 	|-- Web Source
 * 	|-- |-- js
 * 	|-- |-- lib
 *  |-- |-- scss
 * 	|-- Web Root
 * 	|-- |-- assets
 * 	|-- |-- |-- js
 * 	|-- |-- |-- themes
 */


// load Grunt 
module.exports = function (grunt) {
	grunt.initConfig({
		watch: {
			files: 'scss/**/*.scss',
			tasks: ['sass']
		}, 
		sass: {
			dev: {
				files: {
					'../Web Root/assets/themes/illdave/illdave.css': 'scss/illdave.scss'
				}
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'../Web Root/assets/themes/illdave/illdave.css', 
						'../Web Root/*.html'
					]
				},
				options: {
                    watchTask: true,
					server: '../Web Root',
					port: 3001
				}, 
			}
		},
		
		uglify: {
			dist: {
				files: {
					'build/app.min.js': [
					'js/app.js'
					]
				},
				options: {
					sourceMap: 'build/app.min.js.map',
					sourceMappingURL: 'build/app.min.js.map'
				}
			}
		},
		clean: {
			dist: [
				'assets/build/app.min.css',
				'assets/build/app.min.js'
			]
		}
		
		
		
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Register tasks
	grunt.registerTask('default', ['browserSync', 'watch']);
};

