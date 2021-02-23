// This question is asked by Google. Given a string, reverse all of its characters and return the resulting string.

// Ex: Given the following strings...
// “Cat”, return “taC”
// “The Daily Byte”, return "etyB yliaD ehT”
// “civic”, return “civic”

function reverseString(str) {

  // 1. change str to array
  // let inputStringToArray = str.split('');
  // 2. reverse array
  // let reverseArray = inputStringToArray.reverse();
  // 3. change array to str
  // let reverseString = reverseArray.join('');

  let reverseString = str.split('').reverse().join('');

  return reverseString;
}

console.log(reverseString('Cat'));
console.log(reverseString('The Daily Byte'));
console.log(reverseString('“civic”'));


function reverseStringTwo(str) {
  let reverseStr = '';

  for (var i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return reverseStr;
}

console.log(reverseStringTwo('Cat'));
console.log(reverseStringTwo('The Daily Byte'));
console.log(reverseStringTwo('“civic”'));


function reverseStringThree(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseStringThree('Cat'));
console.log(reverseStringThree('The Daily Byte'));
console.log(reverseStringThree('“civic”'));