class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        const memo = new Array(nums.length);
        function dfs(index: number): boolean { // returns true if we can reach end starting from index
            if (index < nums.length - 1 && nums[index] < 1) {
                memo[index] = false;
                return false;
            }
            if (index === nums.length - 1) {
                memo[index] = true;
                return true;
            }
            
            if (memo[index] !== undefined) return memo[index];
            if (nums[index] >= nums.length - 1 - index) {
                memo[index] = true;
                return true;
            }
            for (let i = 1; i <= nums[index]; i++) {
                if (dfs(i + index)) {
                    memo[index] = true;
                    return true;
                }
            }
            memo[index] = false;
            return false;
        }
        dfs(0);
        return memo[0];
    }
}
