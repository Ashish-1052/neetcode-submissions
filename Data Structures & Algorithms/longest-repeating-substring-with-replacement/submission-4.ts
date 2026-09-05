class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * x,x,y,y,y,y
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let left = 0;
        let max = 0;
        const map = new Map(); // string, number
        let currFreqMax = 0;

        for (let right = 0; right < s.length; right++) {
            const currFreq = (map.get(s[right]) ?? 0) + 1;
            currFreqMax = Math.max(currFreq, currFreqMax);
            map.set(s[right], currFreq);
            while (left < right && ((right - left + 1) - currFreqMax) > k) {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }
            max = Math.max(max, right - left + 1);
        }
        return max;
    }
}
