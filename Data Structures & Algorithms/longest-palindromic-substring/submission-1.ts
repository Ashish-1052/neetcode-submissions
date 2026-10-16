class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        let res = '';
        for (let i = 0; i < s.length; i++) {
            let currStr = s[i];
            let left = i - 1;
            let right = i + 1;
            while (left >= 0 && right < s.length) {
                if (s[left] === s[right]) {
                    currStr = s[left] + currStr + s[right];
                    left--;
                    right++;
                } else break;
            }
            res = res.length < currStr.length ? currStr : res;

            if (i < s.length - 1 && s[i] === s[i + 1]) {
                currStr = s[i] + s[i + 1];
                left = i - 1;
                right = i + 2
                while (left >= 0 && right < s.length) {
                    if (s[left] === s[right]) {
                        currStr = s[left] + currStr + s[right];
                        left--;
                        right++;
                    } else break;
                }
                res = res.length < currStr.length ? currStr : res;
            }
        }
        return res;
    }
}
