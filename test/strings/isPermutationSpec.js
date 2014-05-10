require('../test_helper.js');
var isPermutation = require('../../lib/strings/isPermutation.js');

describe('isPermutation', function() {
  it('returns true if str2 is a permutation of str1', function() {
    var str1 = "blah";
    var str2 = "lhba";
    expect(isPermutation(str1, str2)).to.equal(true);
  });

  it('returns true if str2 is a permutation of str1', function() {
    var str1 = "the quick brown fox 12345"
    var str2 = "quick   thebrownfox 21543"
    expect(isPermutation(str1, str2)).to.equal(true);
  });

  it('returns false if str2 is not a permutation of str1', function() {
    var str1 = "blah";
    var str2 = "bleh";
    expect(isPermutation(str1, str2)).to.equal(false);
  });

  it('returns false if str2 is not a permutation of str1', function() {
    var str1 = "apples";
    var str2 = "appples";
    expect(isPermutation(str1, str2)).to.equal(false);
  })
});
