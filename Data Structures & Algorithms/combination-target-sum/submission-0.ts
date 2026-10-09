class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const result = [];
        const subset = [];
        function dfs(index: number, currSum: number): void {
            if (index >= nums.length || currSum > target) return;
            if (currSum === target) {
                result.push([...subset])
                return;
            }
            currSum += nums[index];
            subset.push(nums[index]);
            dfs(index, currSum)
            subset.pop();
            currSum -= nums[index];
            dfs(index + 1, currSum);
        }
        dfs(0, 0);
        return result;
    }
}
