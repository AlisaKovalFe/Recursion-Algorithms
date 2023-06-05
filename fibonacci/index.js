// Итерационный подсчет n-го числа Фибоначчи
const findFibonacciByIteration = (num) => {
    if (num < 1 || num % 1 != 0) return 'для этого числа не посчитаю'

    let first = 0
    let second = 1
    let sum = 0

    for (let i = 2; i <= num; i++) {
        sum = first + second
        second = first
        first = sum
    }
    return sum
}

console.log(findFibonacciByIteration(8));


// Рекурсивное вычисление n-го числа Фибоначчи

const findFibonacciByRec = (num) => {
    if (num < 1 || num % 1 != 0) return 'для этого числа не посчитаю'

    if (num == 1) {
        return 0
    } else if (num == 2) {
        return 1
    } else {
        return findFibonacciByRec(num - 1) + findFibonacciByRec(num - 2)
    }
}

// console.log(findFibonacciByRec(8));