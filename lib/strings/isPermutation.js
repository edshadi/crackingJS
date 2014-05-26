// Problem 1.3
// Given two strings, write a method to decide if one is a permutation of the other

var isPermutation = function(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

module.exports = isPermutation;
