class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freq = Array.from({ length: nums.length + 1 }, () => []);
        const map = new Map();
        for (let num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);
        }
        for (let [key, val] of map) {
            freq[val].push(key);
        }
        let result = [];
        for (let i = nums.length; i >= 0; i--) {
            for (let j = 0; j < freq[i].length; j++) {
                result.push(freq[i][j]);
                if (result.length === k) return result;
            }
        }

        return result;
    }
}
