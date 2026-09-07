class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            console.log({mid, left, right})
            if (nums[left] <= nums[right]) {
                break;
            }
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        const pivot = left;
        console.log({pivot})
        left = pivot;
        right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                return mid;
            }
            if (nums[mid] > target) {
                right = mid - 1
            } else {
                left = mid + 1;
            }
        }
        if (pivot !== 0) {
            left = 0;
            right = pivot - 1;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (nums[mid] === target) {
                    return mid;
                }
                if (nums[mid] > target) {
                    right = mid - 1
                } else {
                    left = mid + 1;
                }
            }
        }
        return -1;
    }
}
