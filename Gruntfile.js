module.exports = function(grunt) {
	'use strict';

	// Project configuration.
	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},

			all: ['Gruntfile.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
};