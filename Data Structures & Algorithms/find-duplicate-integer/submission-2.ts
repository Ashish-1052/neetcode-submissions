class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let n = nums.length;
        let low = 1, high = n - 1;
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            let lessThanMidCount = 0;
            for (let i = 0; i < n; i++) {
                if (nums[i] <= mid) {
                    lessThanMidCount++;
                }
            }

            if (lessThanMidCount <= mid) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low
    }
}
