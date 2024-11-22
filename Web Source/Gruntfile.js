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

'use strict';
module.exports = function(grunt) {
	grunt.initConfig({
		browserSync: {
			bsFiles: {
				src: '../Web Root/assets/themes/illdave/illdave.css'
			},
			options: {
				server: '../Web Root',
				port: 3001
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			},
			all: [
				'Gruntfile.js',
				'js/**/*.js',
				'!build/app.min.js'
			]
		},
		concat: {   
			dist: {
				src: [
					'js/illdave-base.js'
				],
				dest: '../Web Root/assets/themes/illdave/illdave.js',
			}
		},		
		sass: {
			dist: {
				options: {
					style: 'expanded',
					compass: false,
					sourcemap: false
				},
				files: {
					'../Web Root/assets/themes/illdave/illdave.css': [
						'scss/illdave.scss'
					]
				}
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
		watch: {
			options: {
				livereload: true
			},
			sass: {
				files: [
					'scss/**/*.scss'
				],
				tasks: ['sass']
			},
			concat: {
				files: ['js/illdave-base.js','../Web Root/assets/themes/illdave/illdave.js'],
				tasks: ['concat']
			},
			js: {
				files: [
					'js/**/*.js'
				],
				tasks: ['jshint', 'uglify', 'concat']
			},
			html: {
				files: [
				  '**/*.html'
				]
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
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-browser-sync');

	// Register tasks
	grunt.registerTask('default', [
		'clean',
		'sass',
		'uglify'
	]);
		grunt.registerTask('dev', [
		'watch'
	]);
};

