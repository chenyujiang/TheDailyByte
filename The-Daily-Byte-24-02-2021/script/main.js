// Given a string, return whether or not it forms a palindrome ignoring case and non-alphabetical characters.
// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// "level", return true
// "algorithm", return false
// "A man, a plan, a canal: Panama.", return true

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

console.log(palindrome("level"));
console.log(palindrome("algorithm"));
console.log(palindrome("A man, a plan, a canal. Panama"));


function palindromeTwo(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindromeTwo("level"));
console.log(palindromeTwo("algorithm"));
console.log(palindromeTwo("A man, a plan, a canal. Panama"));