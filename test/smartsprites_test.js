'use strict';

var grunt = require('grunt');

exports.cssmin = {
  simple: function(test) {
    test.expect(1);

    var expect = grunt.file.read('test/expected/style.css');
    var result = grunt.file.read('tmp/simple/style.css');
    test.equal(expect, result, 'should generate css file');

    test.done();
  },
  absolute: function(test) {
    test.expect(1);

    var expect = grunt.file.read('test/expected/style.css');
    var result = grunt.file.read('tmp/absolute/style.css');
    test.equal(expect, result, 'should generate css file');

    test.done();
  }
};
