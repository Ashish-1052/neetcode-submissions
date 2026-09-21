class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        while (stones.length > 1) {
            stones.sort((a, b) => a - b);
            const top1 = stones.pop();
            const top2 = stones.pop();
            const diff = top1 - top2;
            stones.push(diff);
        }
        return stones[0];
    }
}
