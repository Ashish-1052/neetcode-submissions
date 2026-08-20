class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let count = new Map();
        let res = 0;
        let left = 0;
        let maxF = 0;
        for (let r = 0; r < s.length; r++) {
            count.set(s[r], (count.get(s[r]) || 0) + 1);
            maxF = Math.max(count.get(s[r]), maxF);

            while (r - left + 1 - maxF > k) {
                count.set(s[left], (count.get(s[left] || 1) - 1));
                left++;
            }

            res = Math.max(res, r - left + 1);
        }

        return res;
    }
}
