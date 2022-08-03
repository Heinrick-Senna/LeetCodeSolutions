/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let array = nums.map((n, i) => {
        return nums[n];
    })
    return array;
};