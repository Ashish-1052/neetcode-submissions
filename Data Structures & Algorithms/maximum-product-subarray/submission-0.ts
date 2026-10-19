class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        let res = nums[0];
        let currMin = nums[0];
        let currMax = nums[0];

        for (let i = 1; i < nums.length; i++) {
            const prodMax = currMax * nums[i];
            const prodMin = currMin * nums[i];
            currMax = Math.max(prodMax, prodMin, nums[i]);
            currMin = Math.min(prodMax, prodMin, nums[i]);
            res = Math.max(currMax, res);
        }
        
        return res;
    }
}
