class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        points.sort((a, b) => (a[1] * a[1] + a[0] * a[0]) - (b[1] * b[1] + b[0] * b[0]));
        const res = [];
        for (let i = 0; i < Math.min(k, points.length); i++) {
            res.push(points[i]);
        }
        return res;
    }
}
