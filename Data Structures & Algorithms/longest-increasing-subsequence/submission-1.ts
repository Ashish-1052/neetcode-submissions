class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        const memo = new Map();
        function dfs(i: number): number { // number of elements of the max subsequence with increasing order from i onwards
            if (memo.has(i)) return memo.get(i)
            if (i === nums.length - 1) {
                memo.set(i, 1);
                return 1
            };
            let maxDepth = 0;
            for (let j = i + 1; j < nums.length; j++) {
                let curr = 0;
                if (nums[j] > nums[i]) {
                    curr += dfs(j);
                }
                maxDepth = Math.max(curr, maxDepth);
            }
            memo.set(i, 1 + maxDepth);
            return 1 + maxDepth;
        }
        let max = 0;
        for (let i = 0; i < nums.length; i++) {
            max = Math.max(max, dfs(i));
        }
        return max;
    }
}
