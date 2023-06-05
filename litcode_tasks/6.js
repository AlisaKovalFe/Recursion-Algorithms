// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

// A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

// If the length of the array is 0, it should return init.

// Please solve it without using the built-in Array.reduce method.

var reduce = function (nums, fn, init) {
    let result = init
    for (let i = 0; i < nums.length; i++) {
        result = fn(init, nums[i])
        init = result
    }
    return result
};

function sum(accum, curr) { return accum + curr; }
function sum2(accum, curr) { return accum + curr * curr; }
function sum3(accum, curr) { return 0; }

console.log(reduce([1, 2, 3, 4], sum, 0));
console.log(reduce([1, 2, 3, 4], sum2, 100));
console.log(reduce([], sum3, 25));