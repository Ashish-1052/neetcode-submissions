class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const result = [];
        const subset = [];
        const pick = new Array(nums.length).fill(false);

        function backTrack() {
            if (subset.length === nums.length) {
                result.push([...subset]);
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                if (!pick[i]) {
                    subset.push(nums[i]);
                    pick[i] = true;
                    backTrack();
                    subset.pop();
                    pick[i] = false;
                }
            }
        }

        backTrack();
        return result;
    }
}
