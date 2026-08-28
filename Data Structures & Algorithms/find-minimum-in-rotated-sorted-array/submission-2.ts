class Solution {
    /**
     * @param {number[]} nums
     * 7,8,9,10,1,2,3,4,5,6
     * @return {number}
     */
    findMin(nums: number[]): number {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (nums[m] > nums[r]) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        return nums[l];
    }
}
