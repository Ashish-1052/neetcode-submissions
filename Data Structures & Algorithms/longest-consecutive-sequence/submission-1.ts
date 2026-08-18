class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 1 || nums.length === 1) return nums.length;
        const lookup = new Set<number>(nums);
        let res = 0;
        for (let num of nums) {
            if (!lookup.has(num - 1)) {
                let toCheck = num;
                let curr = 0;
                while (lookup.has(toCheck)) {
                    toCheck++;
                    curr++;
                }
                res = Math.max(res, curr);
            }
        }

        return res;
    }
}
