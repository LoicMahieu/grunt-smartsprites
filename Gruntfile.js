/*
 * grunt-contrib-smartsprites
 * https://github.com/twoer/grunt-contrib-smartsprites
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    // Before generating any new files, remove any previously-created files.
    clean: {
      test: ['tmp']
    },

    // Configuration to be run (and then tested).
    smartsprites: {
      main: {
        rootPath: 'test/fixtures/simple',
        outputPath: 'tmp/simple',
        cssFileSuffix: '',
        stdout: true,
        stderr: true
      },
      absolute: {
        rootPath: 'test/fixtures/absolute',
        outputPath: 'tmp/absolute',
        cssFileSuffix: '',
        documentRootDirPath: 'test/fixtures',
        stdout: true,
        stderr: true
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-release');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'jshint', 'smartsprites', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
