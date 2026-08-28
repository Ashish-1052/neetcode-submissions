class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;
        let pivot = r;

        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (nums[m] > nums[r]) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        pivot = l;

        if (target === nums[pivot]) return pivot;

        l = 0;
        r = pivot - 1;
        console.log('pivot', pivot)

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (target === nums[mid]) return mid;
            if (target > nums[mid]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        l = pivot;
        r = nums.length - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            console.log('mid', {mid, numsMid: nums[mid], l, r})
            if (target === nums[mid]) return mid;
            if (target > nums[mid]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return -1;
    }
}
