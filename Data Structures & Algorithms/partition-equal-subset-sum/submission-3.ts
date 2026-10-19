class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {
        const total = nums.reduce((a, c) => a + c, 0);
        if (total % 2 !== 0) return false;
        const target = total / 2;
        const memo = Array.from(Array(nums.length + 1), () =>
            Array(total / 2 + 1).fill(null),
        );

        function dfs(i: number, target: number): boolean { // tells if array starting from i is breakable or not 
            if (i === nums.length) {
                return target === 0;
            }
            if (target < 0) {
                return false;
            }
            if (memo[i][target] != null) {
                return memo[i][target];
            }

            const res = dfs(i + 1, target) || dfs(i + 1, target - nums[i]);
            memo[i][target] = res;
            return res;
        }
        return dfs(0, target)
    }
}
