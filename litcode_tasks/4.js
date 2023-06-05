// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

Array.prototype.last = function () {
    return this[this.length - 1] || -1 // почему код не падает, когда идет обращение к последнего элементу в пустом массиве?
};

console.log([1, 2, 3].last());
console.log([].last());