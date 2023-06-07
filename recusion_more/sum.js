const sum = (arr) => {

    if (arr.length == 0) return 0
    if (arr.length == 1) {
        return arr[0]
    } else {
        return arr[0] + sum(arr.slice(1))
    }
}

// console.log(sum([2, 4, 6]));
// console.log(sum([]));

const findMax = (arr) => {

}

console.log(findMax([2, 4, 6, 8, 1]));