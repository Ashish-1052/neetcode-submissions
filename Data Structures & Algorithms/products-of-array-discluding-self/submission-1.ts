class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     * out[i] * in[i] = product;
     * 
     */
    productExceptSelf(nums: number[]): number[] {
        let zeroCount = 0;
        let product = 1;
        for (let num of nums) {
            if (num === 0) {
                zeroCount++;
            } else {
                product *= num;
            }
        }
        if (zeroCount >= 2) {
            const res = [];
            for (let num of nums) {
                res.push(0);
            }
            return res;
        }
        if (zeroCount === 1) {
            const res = [];
            for (let num of nums) {
                if (num !== 0) {
                    res.push(0);
                } else {
                    res.push(product);
                }
            }
            return res;
        }
        if (zeroCount === 0) {
            const res = [];
            for (let num of nums) {
                res.push(product / num);
            }
            return res;
        }
    }
}
