class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * [30,20,4,10,3,4,5,2]
     */
    longestConsecutive(nums: number[]): number {
        let max = 0;
        const numsSet = new Set(nums);
        for (let right = 0; right < nums.length; right++) {
            if (numsSet.has(nums[right] - 1)) continue;
            let curr = nums[right] + 1;
            let currLen = 1;
            while (numsSet.has(curr)) {
                currLen++;
                curr++;
            }
            max = Math.max(currLen, max);
        }
        return max;
    }
}
