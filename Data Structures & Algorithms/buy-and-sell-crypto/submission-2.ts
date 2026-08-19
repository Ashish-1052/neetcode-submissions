class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * [10, 2, 5, 1, 6, 8]
     */
    maxProfit(prices: number[]): number {
        let currMin = prices[0];
        let maxProfit = 0;
        for (let i = 1; i < prices.length; i++) {
            if (currMin > prices[i]) {
                currMin = prices[i];
            } else if (currMin < prices[i]) {
                const currProfit = prices[i] - currMin;
                maxProfit = Math.max(currProfit, maxProfit);
            }
        }
        return maxProfit;
    }
}
