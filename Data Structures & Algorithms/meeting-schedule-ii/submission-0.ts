/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        const time = [];
        for (let i of intervals) {
            time.push([i.start, 1]);
            time.push([i.end, -1]);
        }
        time.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

        let curr = 0, res = 0;
        for (let t of time) {
            curr += t[1];
            res = Math.max(curr, res);
        }
        return res;
    }
}
