// Код для первого задания напиши в этой функции
function crawlTree(arr) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            str += arr[i]
        } else {
            str += crawlTree(arr[i])
        }
    }
    return str
}

// Код для второго задания напиши в этой функции
function twoSum(arr, target) {

    //универсально решение
    function executor(i, j) {
        if (arr[i] + arr[j] == target) return [i, j]
        if (j < arr.length) {
            return executor(i, j + 1)
        } else {
            return executor(i + 1, i + 2)
        }
    }

    return executor(0, 1)

    //с рекурсией, не универсальный вариант
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] + arr[i + 1] == target) return [i, i + 1]
    // }

    // if (arr.length) {
    //     arr.shift()
    //     return twoSum(arr, target)
    // }

    // без рекурсии
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] + arr[j] == target) return [i, j]
    //     }
    // }
}


// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;