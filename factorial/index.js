// Итерационный подсчет факториала
function factIterat(num) {
    let result = 1

    if (num < 0 || num % 1 !== 0) return 'не посчитаю факториал'

    for (let i = num; i > 0; i--) {
        result *= i
    }
    return result
}

console.log(factIterat(5));

// Рекурсивный расчет факториала
function factRec(num) {

    if (num < 0 || num % 1 !== 0) return 'не посчитаю факториал'

    if (num <= 1) {
        return 1
    } else {
        return num * factRec(num - 1)
    }
}

// console.log(factRec(4));