class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums: number[]): number {
        const memo = new Map();
        function dfs(index: number): number { // min starting from index to reach last
            if (index >= nums.length - 1) {
                return 0;
            }
            if (memo.has(index)) return memo.get(index);
            let min = Infinity;
            for (let i = 1; i <= nums[index]; i++) {
                const jumps = 1 + dfs(index + i);
                min = Math.min(jumps, min);
            }
            memo.set(index, min);
            return min;
        }
        return dfs(0);
    }
}
