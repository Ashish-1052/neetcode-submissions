class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
       const set = new Set(nums);
       let max = 0;
       for (let s of set) {
        if (set.has(s-1)) continue;
        let currLen = 1;
        let toCheck = s + 1;
        while(set.has(toCheck)) {
            currLen++;
            toCheck++;
        }
        max = Math.max(max, currLen);
       }
       return max
    }
}
