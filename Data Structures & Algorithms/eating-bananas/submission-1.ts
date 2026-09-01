class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let l = 1;
        let r = Math.max(...piles);
        while (l < r) {
            const mid = Math.floor((l + r) / 2);
            let time = 0;
            for (let p of piles) {
                time += Math.ceil(p / mid);
            }
            console.log({time, mid})
            if (time <= h) {
                r = mid;
            } else {
                l = mid + 1;
            }
            console.log({l, r})
        }
        return l;
    }
}
