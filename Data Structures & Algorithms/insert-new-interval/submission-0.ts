class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {
        intervals.push(newInterval);
        intervals.sort((a, b) => a[0] - b[0]);
        const res = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            if (res.at(-1)[0] === intervals[i][0] || res.at(-1)[1] >= intervals[i][0]) {
                res[res.length-1][1] = Math.max(intervals[i][1], res.at(-1)[1]);
            } else {
                res.push(intervals[i]);
            }
        }

        return res;
    }
}
