'use strict';

var grunt = require('grunt');

exports.cssmin = {
  main: function(test) {
    test.expect(1);

    var expect = grunt.file.read('test/expected/style.css');
    var result = grunt.file.read('tmp/style.css');
    test.equal(expect, result, 'should generate css file');

    test.done();
  }
};
