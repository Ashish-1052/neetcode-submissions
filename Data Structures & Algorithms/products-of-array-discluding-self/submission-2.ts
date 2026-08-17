class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     * out[i] * in[i] = product;
     * prefix[i] * suffix[i] = out[i];
     * 
     */
    productExceptSelf(nums: number[]): number[] {
        const prefix = new Array(nums.length);
        const suffix = new Array(nums.length);
        const res = [];

        prefix[0] = 1;
        suffix[nums.length - 1] = 1;

        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i-1] * nums[i-1];
        }

        for (let j = nums.length - 2; j >= 0; j--) {
            suffix[j] = suffix[j+1] * nums[j+1];
        }

        for (let i = 0; i < nums.length; i++) {
            res.push(prefix[i] * suffix[i]);
        }

        return res;
    }
}
