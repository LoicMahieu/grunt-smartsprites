'use strict';

module.exports = function(grunt) {

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
        rootDirPath: 'test/fixtures/simple',
        outputDirPath: 'tmp/simple',
        cssFileSuffix: '',
        stdout: true,
        stderr: true
      },
      absolute: {
        rootDirPath: 'test/fixtures/absolute',
        outputDirPath: 'tmp/absolute',
        cssFileSuffix: '',
        documentRootDirPath: 'test/fixtures',
        stdout: true,
        stderr: true
      }
    },

    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt);

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'jshint', 'smartsprites', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
