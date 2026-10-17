class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        const memo = new Map()
        function dfs(amount: number): number { // returns the [sum from i + 1, number of coins involved]
            if (amount === 0) return 0;

            if (memo.has(amount)) return memo.get(amount);

            let res = Infinity;
            for (let coin of coins) {
                if (amount - coin >= 0) {
                    res = Math.min(res, 1 + dfs(amount - coin));
                }
            }
            memo.set(amount, res)
            return res;
        }
        let minCoins = dfs(amount);
        return minCoins === Infinity ? -1 : minCoins
    }
}
