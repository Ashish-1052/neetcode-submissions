class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1: string, word2: string): number {
        const memo = Array.from({ length: word1.length + 1 }, () => new Array(word2.length + 1).fill(-1))
        function dfs(i: number, j: number): number { // num of min ways to equal word1 to word2 from i onwards and j onwards repectively
            if (i === word1.length) return word2.length - j;   // insert the rest
            if (j === word2.length) return word1.length - i;
            if (memo[i][j] !== -1) return memo[i][j]
            if (word1[i] !== word2[j]) { // either remove or replace
                const res = 1 + Math.min(dfs(i + 1, j), dfs(i + 1, j + 1), dfs(i, j + 1));
                memo[i][j] = res;
                return res;
            }
            const res = dfs(i + 1, j + 1);
            memo[i][j] = res
            return res;
        }
        return dfs(0, 0);
    }
}
