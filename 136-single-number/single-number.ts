function singleNumber(nums: number[]): number {
    
    let n = 0;
    for (let i = 0; i < nums.length; i++) {
        n ^= nums[i];
    }

    return n;
};