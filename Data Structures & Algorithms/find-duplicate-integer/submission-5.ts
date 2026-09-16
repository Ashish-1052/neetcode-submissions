class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        for (let i = 0; i < nums.length; i++) {
            const ind = Math.abs(nums[i]) - 1;
            if (nums[ind] < 0) {
                return Math.abs(nums[i])
            }
            nums[ind] *= -1;
        }
        return -1;
    }
}
