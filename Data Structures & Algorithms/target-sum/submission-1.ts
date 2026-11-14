class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums: number[], target: number): number {
        const totalSum = nums.reduce((a, c) => a + c, 0);
        const memo = Array.from({ length: nums.length }, () => new Array(2 * totalSum + 1).fill(-Infinity));
        function dfs(i: number, total: number): number {
            if (i === nums.length) {
                return total === target ? 1 : 0;
            }
            if (memo[i][total + totalSum] !== -Infinity) {
                return memo[i][total + totalSum];
            }
            memo[i][total + totalSum] = dfs(i + 1, total + nums[i]) + dfs(i + 1, total - nums[i]);
            return memo[i][total + totalSum];
        }
        return dfs(0,0);
    }
}
