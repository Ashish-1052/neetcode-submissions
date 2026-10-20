class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     * abcdefgh abcefghd
     */
    longestCommonSubsequence(text1: string, text2: string): number {
        const memo = Array.from({ length: text1.length }, () => new Array(text2.length).fill(-1));
        function dfs(i: number, j: number): number { // max lcs starting from i, j
            if (i === text1.length || j === text2.length) {
                return 0;
            }
            if (memo[i][j] !== -1) return memo[i][j];

            if (text1[i] === text2[j]) {
                memo[i][j] = 1 + dfs(i + 1, j + 1);
            } else {
                memo[i][j] = Math.max(dfs(i + 1, j), dfs(i, j + 1));
            }
            return memo[i][j];
        }
        return dfs(0,0)
    }
}
