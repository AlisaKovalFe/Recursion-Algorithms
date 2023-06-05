// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

var isPalindrome = function (x) {
    let y = +(x.toString().split('').reverse().join(''))
    return x === y
};

console.log(isPalindrome(121));