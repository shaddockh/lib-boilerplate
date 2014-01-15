/* global describe,it */
var should = require('should');
var lib = require('../lib/main');

describe('library', function () {
  describe('with no arguments', function () {
    it('returns an empty array', function () {
      var result = lib();
      result.should.eql([]);
    });
  });
});
