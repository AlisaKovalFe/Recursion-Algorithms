// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
    let arr = []

    for (let i = 0; i < strs.length - 1; i++) {
        if (strs[i][0] != strs[i + 1][0]) return ''
        for (let j = 0; j < strs[i].length; j++) {
            if (strs[i][j] == strs[i + 1][j]) arr.push(strs[i][j])
        }
    }

    let res = arr.filter((el, index) => index !== arr.indexOf(el)).join('')

    return res


    // решение мужа
    // let str = ''
    // for (let i = 0; i < strs[0].length; i++) {
    //     for (let n = 1; n < strs.length; n++) {
    //         if (strs[0][i] != strs[n][i]) return str;
    //     }
    //     str += strs[0][i];
    // }
}

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["flower", "flow", "flowers"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
