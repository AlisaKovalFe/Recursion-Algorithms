// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = function (s) {
    for (let i = 0; i < s.length; i += 2) {
        if (s[i] == '(' && s[i + 1] != ')') return false;
        if (s[i] == '[' && s[i + 1] != ']') return false;
        if (s[i] == '{' && s[i + 1] != '}') return false;
    }
    return true
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));