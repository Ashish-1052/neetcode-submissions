class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount: number, coins: number[]): number {
        coins.sort((a, b) => a - b);
        const memo = Array.from({ length: coins.length + 1 }, () => new Array(amount + 1).fill(-1));
        function dfs(i: number, a: number): number {
            if (a === 0) return 1;
            if (i >= coins.length) return 0;

            if (memo[i][a] !== -1) return memo[i][a];
            let res = 0;
            if (a >= coins[i]) {
                res = dfs(i + 1, a);
                res += dfs(i, a - coins[i]);
            }
            memo[i][a] = res;
            return res;
        }
        return dfs(0,amount);
    }
}
