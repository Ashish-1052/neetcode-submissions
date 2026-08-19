class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const maxFreq = nums.length + 1;
        const freqArr = new Array(maxFreq);
        for (let i = 0; i <= maxFreq; i++) {
            freqArr[i] = [];
        }
        const freq = new Map();
        for (let num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }
        for (let [key, val] of freq) {
            const newVal = freqArr[val];
            newVal.push(key);
        }
        let count = 0;
        const res = [];
        for (let i = maxFreq; i >= 0; i--) {
            if (freqArr[i].length !== 0) {
                for (let n of freqArr[i]) {
                    res.push(n);
                    count++;
                    if (count === k) return res;
                }
            }
        }

    }    
}
