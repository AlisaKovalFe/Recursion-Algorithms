// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
    let str = ''
    // let arr = strs.map((el) => el.split(''))
    // let minLength = arr[0].length
    let i
    // let arrAfterSlice = []

    // for (i = 0; i < arr.length; i++) {
    //     if (arr[i].length < minLength) minLength = arr[i].length
    // }

    // for (i = 0; i < arr.length; i++) {
    //     arrAfterSlice.push(arr[i].slice(0, minLength))
    // }

    // console.log(arrAfterSlice);


    // for (i = 0; i < arrAfterSlice.length; i++) {
    //     for (let j = 0; arrAfterSlice[i].length; j++) {
    //         if (arrAfterSlice[i].includes(arrAfterSlice[i + 1][j])) {
    //             // str += arr[i][j]
    //             console.log('hi');
    //         }
    //     }
    // }

    for (let i = 0; i < strs[i].length; i++) {
        for (let j = 1; i < strs[i + 1].length; j++) {
            if (strs[i][i] == strs[i + 1][j]) {
                str += strs[i][i]
            }
        }
    }

    console.log(str);

    // return str
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

