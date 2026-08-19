class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequency = new Map<number, number>();
        for (let num of nums) {
            frequency.set(num, (frequency.get(num) ?? 0) + 1);
        }
        const keys = Array.from(frequency.keys());
        keys.sort((a,b) => frequency.get(b) - frequency.get(a));
        return keys.slice(0,k);
    }    
}
