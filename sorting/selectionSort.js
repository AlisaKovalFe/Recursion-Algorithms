// из учебника
const findSmallest = (arr) => {
    let smallest = arr[0]
    let smallestIndex = 0

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
    }
    return smallestIndex
}

const selectionSort = (arr) => {
    let newArr = []
    let length = arr.length

    for (let i = 0; i < length; i++) {
        let smallestIndex = findSmallest(arr)
        let smallest = arr[smallestIndex]

        newArr.push(smallest)
        arr.splice(smallestIndex, 1)
    }
    return newArr
}

console.log(selectionSort([5, 3, 6, 2, 10]));