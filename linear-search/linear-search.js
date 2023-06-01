//Реализуй функции линейного поиска. Проверь результат тестами.
//принимает два аргумента: объект и массив. Она должна последовательно перебирать каждый элемент и возвращать индекс,
// в котором объект был изначально найден. Если объект не найден, то функция возвращает значение -1.
function linearSearch(n, arr) {
    return arr.indexOf(n)
}


//напишем новый метод globalLinearSearch, который возвращает массив всех индексов, в которых найден элемент.
function globalLinearSearch(n, arr) {
    return arr.map((el, index) => el === n ? index : '')
        .filter((el) => Boolean(el))
}

module.exports = {
    linearSearch,
    globalLinearSearch
}
