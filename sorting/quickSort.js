const quickSort = (arr) => {

    if (arr.length <= 1) return arr

    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr[pivotIndex]
    let left = []
    let right = []

    console.log(pivot);

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) continue;
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    console.log(left)
    console.log(right)

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([-5, 23, 7, 5, 3, -12, -29, 21, 54, 35, 0]));
console.log(quickSort([5, 1, 2, 6, 7]));


// Быстрая сортировка в среднем и лучшем случае выполняется за Θ(n * log(n)). В худшем случае время выполнения алгоритма занимает О(n^2).

