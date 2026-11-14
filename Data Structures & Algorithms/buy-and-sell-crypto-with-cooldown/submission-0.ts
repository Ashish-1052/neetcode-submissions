class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        const map = new Map<string, number>();
        function dfs(i: number, buying: boolean): number { // max profit on day i, allowed to buy or not
            if (i >= prices.length) return 0;
            const key = `${i}-${String(buying)}`;
            if (map.has(key)) return map.get(key);

            const ifSkip = dfs(i + 1, buying);
            if (buying) {
                const buy = dfs(i + 1, false);
                const profit = Math.max(buy - prices[i], ifSkip);
                map.set(key, profit);
            } else {
                const sell = dfs(i + 2, true);
                const profit = Math.max(sell + prices[i], ifSkip);
                map.set(key, profit);
            }
            return map.get(key);
        }
        return dfs(0, true);
    }
}
