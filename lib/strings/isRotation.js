// Assume you have a method <string>.include? which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to <string>.include? (e.g., "waterbottLe" is a rotation of "erbottLewat")
module.exports = Strings = (function() {
  var _isSubstring = function(str1, str2) {
    return str1.indexOf(str2) != -1
  }
  var _sameLengthAndNotBlank = function(str1, str2) {
    var len = str1.length;
    return len === str2.length && len > 0
  }
  return {
    isRotation: function(str1, str2) {
      if(!_sameLengthAndNotBlank(str1, str2)) return false;
      return _isSubstring(str1+str1, str2);
    }
  }
}());
