class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let l = 0;
        const seen = new Set();
        let max = 0;

        for (let r = 0; r < s.length; r++) {
            while (seen.has(s[r])) {
                seen.delete(s[l]);
                l++;
            }
            seen.add(s[r]);
            max = Math.max(max, r - l + 1);
        }
        return max;
    }
}
