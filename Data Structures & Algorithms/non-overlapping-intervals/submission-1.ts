class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        intervals.sort((a, b) => a[0] - b[0]);
        const res = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const last = res[res.length-1];
            if (intervals[i][0] >= last[1]) {
                res.push(intervals[i]);
            } else if (last[1] > intervals[i][0]) {
                if (intervals[i][1] > last[1]) {
                    continue;
                } 
                last[0] = intervals[i][0];
                last[1] = intervals[i][1];
            }
        }
        console.log({ res })
        return intervals.length - res.length;
    }
}
