// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//норм ли это решение? оно не похоже на то, которое в прошлый раз помог супруг написать
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + nums[i + 1] == target) return [i, i + 1]
    }

    if (nums.length) {
        nums.shift()
        return twoSum(nums, target) // здесь нужен return или нет?
    }
    return []
};



// а еще есть сумма 3х чисел, надо найти и решить!!!!!!!!!!!!


//еще решение, нужно разобраться
// var twoSum = function (nums, target) {
//     let result = {}

//     for (let i = 0; i < nums.length; i++) {
//         result[nums[i]] = i
//     }

//     for (let i = 0; i < nums.length; i++) {
//         let diff = target - nums[i]

//         if (result[diff] && result[diff] !== i) return [i, result[diff]]
//     }
//     return []
// };

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([], 6));