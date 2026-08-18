class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const clean = s.split("").filter(c => (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')).join("").toLowerCase();
        console.log('clean', clean);
        for (let i = 0; i < clean.length / 2; i++) {
            if (clean[i] !== clean[clean.length - i - 1]) return false;
        }
        return true
    }
}
