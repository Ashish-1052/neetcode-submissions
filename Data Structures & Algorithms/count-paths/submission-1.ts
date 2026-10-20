class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        if (m === 1 && n === 1) return 1;
        const memo = Array.from({ length: m + 1 }, () => new Array(n + 1));
        function dfs(r: number, c: number): void { // num of ways to end starting from r, c in the grid
            if (memo[r][c] !== undefined) return;
            if (r === m-1 && c === n-1) {
                memo[r][c] = 0;
                return 
            }; // reached already
            if (r === m-1) {
                memo[r][c] = 1;
                return
            }
            if (c === n-1) {
                memo[r][c] = 1;
                return
            }
            if (r >= m || c >= n) {
                memo[r][c] =  0;
                return
            }

            dfs(r + 1, c);
            dfs(r, c + 1);

            memo[r][c] = memo[r + 1][c] + memo[r][c + 1];
        }
        dfs(0,0);
        return memo[0][0];
    }
}
