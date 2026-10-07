class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        while (stones.length > 1) {
            stones.sort((a, b) => a - b);
            const heavy1 = stones.pop();
            const heavy2 = stones.pop();
            const diff = Math.abs(heavy1 - heavy2);
            // if (diff > 0) {
                stones.push(diff);
            // }
        }
        return stones[0];
    }
}
