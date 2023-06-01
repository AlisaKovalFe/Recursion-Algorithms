const binarySearch = require('../index')

test('Функция должна возвращать индекс элемента', () => {
    let arr = ['A', 'B', 'D', 'C', 'E', 'F', 'G', 'H']
    let item = 'G'
    expect(binarySearch(arr, item)).toEqual(6)
})

test('Функция должна быть определена', () => {
    let arr = ['A', 'B', 'D', 'C', 'E', 'F', 'G', 'H']
    let item = 'G'
    expect(binarySearch(arr, item)).toBeDefined()
})

test('Функция должна возвращать -1, если элемента не существует в данном массиве', () => {
    let arr = ['A', 'B', 'D', 'C', 'E', 'F', 'G', 'H']
    let item = 'Y'
    expect(binarySearch(arr, item)).toEqual(-1)
})