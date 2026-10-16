class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        let res = 0;
        for (let i = 0; i < s.length; i++) {
            let left = i - 1;
            let right = i + 1;
            res++;
            while (left >= 0 && right < s.length) {
                if (s[left] === s[right]) {
                    res++;
                    left--;
                    right++;
                } else break;
            }

            if (i < s.length - 1 && s[i] === s[i + 1]) {
                res++;
                left = i - 1;
                right = i + 2
                while (left >= 0 && right < s.length) {
                    if (s[left] === s[right]) {
                        res++
                        left--;
                        right++;
                    } else break;
                }
            }
        }
        return res;
    }
}
