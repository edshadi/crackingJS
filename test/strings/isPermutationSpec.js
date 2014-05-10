require('../test_helper.js');
var isPermutation = require('../../lib/strings/isPermutation.js');

describe('isPermutation', function() {
  it('returns true if str2 is a permutation of str1', function() {
    var str1 = "blah";
    var str2 = "lhba";
    expect(isPermutation(str1, str2)).to.equal(true);
  });
});
