/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++ ) for (let z = 0; z < nums.length; z++) if (nums[i] + nums[z] == target && i != z) return [i, z];
};