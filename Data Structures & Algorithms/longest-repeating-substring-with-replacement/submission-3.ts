class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
       let countMap = new Map();
       let left = 0;
       let maxF = 0;
       let result = 0;
       for (let right = 0; right < s.length; right++) {
        countMap.set(s[right], (countMap.get(s[right]) || 0) + 1);
        maxF = Math.max(countMap.get(s[right]), maxF);
        while (right - left + 1 - maxF > k) {
            countMap.set(s[left], countMap.get(s[left]) - 1);
            left++;
        }
        result = Math.max(result, right - left + 1);
       }
       return result;
    }
}
