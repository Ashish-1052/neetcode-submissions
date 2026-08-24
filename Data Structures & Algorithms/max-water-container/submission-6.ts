class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0;
        let r = heights.length - 1;
        let max = 0;
        while(l < r && l < heights.length && r < heights.length) {
            const area = (r - l) * Math.min(heights[l], heights[r]);
            max = Math.max(area, max);
            if (heights[l] > heights[r]) {
                r--;
            } else if (heights[l] < heights[r]) {
                l++;
            } else {
                l++;
                r--;
            }
        }
        return max;
    }
}
