class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let left = 0;
        const set = new Set();
        let res = 0;
        for (let right = 0; right < s.length; right++) {
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
            res = Math.max(right - left + 1, res);
        }
        return res;
    }
}
