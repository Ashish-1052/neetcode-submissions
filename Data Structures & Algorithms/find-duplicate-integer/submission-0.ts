class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        for (let num of nums) {
            const ind = Math.abs(num) - 1;
            if (nums[ind] < 0) {
                return Math.abs(num);
            }
            nums[ind] *= -1
        }
        return -1;
    }
}
