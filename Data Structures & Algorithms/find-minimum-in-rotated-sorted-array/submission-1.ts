class Solution {
    /**
     * @param {number[]} nums
     * 7,8,9,10,1,2,3,4,5,6
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[left] <= nums[right]) {
                return nums[left];
            } else {
                if (nums[mid] > nums[left] || nums[mid] > nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
        }

        return nums[right]
    }
}
