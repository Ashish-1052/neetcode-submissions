class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * [10, 2, 5, 1, 6, 8]
     */
    maxProfit(prices: number[]): number {
        let l = 0;
        let r = 1;
        let max = 0;
        while (l < r && r < prices.length && l < prices.length) {
            if (prices[l] < prices[r]) {
                const diff = prices[r] - prices[l];
                max = Math.max(diff, max);
                r++;
            } else if (prices[l] >= prices[r]) {
                l = r;
                r++;
            }
        }
        return max;
    }
}
