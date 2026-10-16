class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const memo = new Array<number>(nums.length).fill(-1);
        function dfs(i: number): number { // the maximum of robbing from the current index
            if (i >= nums.length) {
                return 0;
            }
            if (memo[i] !== -1) return memo[i];
            memo[i] = Math.max(dfs(i + 1), dfs(i + 2) + nums[i]);
            return memo[i];
        }
        return dfs(0);
    }
}
