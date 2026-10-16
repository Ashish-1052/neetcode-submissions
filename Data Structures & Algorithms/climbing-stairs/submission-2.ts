class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        const res: number[] = new Array(n + 1);
        res[0] = 1;
        res[1] = 1;
        for (let i = 2; i <= n; i++) {
            res[i] = res[i-1] + res[i-2];
        }
        return res.at(-1);
    }
}
