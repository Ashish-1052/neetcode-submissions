class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * [10, 2, 5, 1, 6, 8]
     */
    maxProfit(prices: number[]): number {
        let l = 0;
        let r = 1;
        let maxP = 0;
        while (r < prices.length) {
            if (prices[l] > prices[r]) {
                l = r;
                r++;
            }
            if (prices[l] < prices[r]) {
                maxP = Math.max(maxP, prices[r] - prices[l]);
            }
            r++;
        }

        return maxP
    }
}
