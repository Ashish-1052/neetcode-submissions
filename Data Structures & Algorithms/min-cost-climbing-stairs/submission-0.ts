class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        const memo = new Map<number, number>() // i, cost
        function f(i: number): number { // return the cost of reaching i minimum;
            if (i <= 1) return 0;
            if (memo.has(i)) return memo.get(i);
            const res = Math.min(f(i-1) + cost[i-1], f(i-2) + cost[i-2]);
            memo.set(i, res);
            return res;
        }
        return f(cost.length);
    }
}
