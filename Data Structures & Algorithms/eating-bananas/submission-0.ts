class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        const max = Math.max(...piles);
        let left = 1;
        let right = max;
        let res = right;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            let totalTime = 0;
            for (let p of piles) {
                totalTime += Math.ceil(p / mid);
            }
            if (totalTime <= h) {
                res = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return res;
    }
}
