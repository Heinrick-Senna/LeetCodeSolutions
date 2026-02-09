/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length -1; i >= 0; i--) {
        const digit = digits[i];
        
        if (digit != 9) {
            digits[i] += 1;
            break;
        }

        if (digit == 9) digits[i] = 0;
           
        if (i == 0 && digit == 9) digits.unshift(1)
    }
    return digits;
};