// Этот метод должен искать элемент в массиве и возвращать его индекс или -1, если элемент не находится в массиве.
// Например, если ты ищешь G в массиве [A, B, C, D, E, F, G, H], твой метод должен возвращать 6. Если ты ищешь X, он должен возвращать -1.

function binarySearch(arr, item) {
    arr.sort()
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        let guess = arr[middle]
        if (guess === item) return middle
        if (guess < item) start = middle + 1
        if (guess > item) end = middle - 1
    }
    return - 1
}

module.exports = binarySearch