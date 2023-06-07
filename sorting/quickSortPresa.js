//этот код не понимаю

function partition(items, left, right) {
    const pivot = items[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (items[i] < pivot) i += 1
        while (items[j] > pivot) j -= 1
        if (i <= j) {
            const temp = items[i];
            items[i] = items[j];
            items[j] = temp;
            i += 1;
            j -= 1;
        }
    }
    return i;
}


// const partition = (items, left, right) => {
//     const pivotIndex = Math.floor((right + left) / 2)
//     const pivot = items[pivotIndex]
//     let i = left;
//     let j = right;


//     for (let i = 0; i < items.length; i++) {

//     }
// }

const arr = [15, 4, 10, 100, 2, 34, 6, 8];
function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);
        console.log(index);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}
console.log(quickSort(arr, 0, arr.length - 1))