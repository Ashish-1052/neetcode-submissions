class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        const memo = new Map(); //
        function dfs(i: number): boolean { // check if the suffix starting at index i matches a word in the dict
            if (memo.has(i)) return memo.get(i);
            if (i === s.length) {
                memo.set(i, true);
                return true;
            }

            for (let w of wordDict) {
                if (i + w.length <= s.length && s.substring(i, i + w.length) === w) {
                    if (dfs(i + w.length)) {
                        memo.set(i, true);
                        return true;
                    }
                }
            }
            memo.set(i, false);
            return false;
        }
        return dfs(0)
    }
}
