class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const seen = new Set<string>();
        let l = 0;
        let maxL = 0;

        for (let r = 0; r < s.length; r++) {
            while (seen.has(s[r])) {
                seen.delete(s[l]);
                l++;
            }
            seen.add(s[r]);
            maxL = Math.max(maxL, r - l + 1);
        }

        return maxL;
    }
}
