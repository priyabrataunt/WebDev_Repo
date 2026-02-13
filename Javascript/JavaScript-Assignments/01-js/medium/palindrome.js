/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
    const lowerCase = str.toLowerCase();
    const len = lowerCase.length;
    for (let i= 0; i<len/2; i++){
      if(lowerCase[i] != lowerCase[len - 1 - i]){
        return false
      }
    }
    return true;
}

console.log(isPalindrome("Radar"));
console.log(isPalindrome("Apple"));
console.log(isPalindrome("madam"));
// module.exports = isPalindrome;