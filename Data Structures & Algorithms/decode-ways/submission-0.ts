class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {
        const memo = new Map();
        function f(i: number): number { // returns the number of ways we can decode a string starting at index i
            if (i === s.length) return 1;
            if (s[i] === '0') return 0;

            if (memo.has(i)) return memo.get(i);
            let res = f(i + 1);
            if (i < s.length - 1) {
                if (s[i] === '1' || (s[i] === '2' && s[i + 1] < '7')) {
                    res += f(i + 2);
                }
            }
            memo.set(i, res);
            return res;
        }

        return f(0);
    }
}
