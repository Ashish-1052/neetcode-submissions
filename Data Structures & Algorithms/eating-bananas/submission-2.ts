class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1;
        let right = Math.max(...piles);
        let res = right;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            let time = 0;
            for (let p of piles) {
                time += Math.ceil(p / mid);
            }
            if (time > h) {
                left = mid + 1;
            } else {
                right = mid;
                res = mid;
            }
        }

        return res;
    }
}
