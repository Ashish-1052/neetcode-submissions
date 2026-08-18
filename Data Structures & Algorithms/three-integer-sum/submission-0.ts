class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const keys = new Set<string>();
        for (let i = 0; i < nums.length; i++) {
            const set = new Set<number>(); // nums
            const target = -nums[i];
            for (let j = i + 1; j < nums.length; j++) {
                const toCheck = target - nums[j];
                if (set.has(toCheck)) {
                    const key = [nums[i], nums[j], toCheck].sort((a, b) => a - b).join('#');
                    keys.add(key);
                }
                set.add(nums[j]);
            }
        }
        const res = [];
        for (let k of keys) {
            const nums = k.split('#').map(i => Number(i));
            res.push(nums);
        }
        return res;
    }
}
