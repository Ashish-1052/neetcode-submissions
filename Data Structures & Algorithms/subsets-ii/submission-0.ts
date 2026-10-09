class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        const res = [];
        const subset = [];
        nums.sort((a, b) => a - b);
        const keySet = new Set();

        function dfs(index: number): void {
            if (index >= nums.length) {
                const key = subset.reduce((a, c) => a + `#${c}`, '');
                if (!keySet.has(key)) {
                    res.push([...subset]);
                    keySet.add(key);
                }
                return;
            }
            subset.push(nums[index]);
            dfs(index + 1);
            subset.pop();
            dfs(index + 1);
        }

        dfs(0);
        return res;
    }
}
