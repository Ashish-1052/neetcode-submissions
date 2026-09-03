class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minBuy = prices[0];
        let maxP = 0;

        for (let sell of prices) {
            maxP = Math.max(maxP, sell - minBuy)
            minBuy = Math.min(minBuy, sell);
        }

        return maxP
    }
}
