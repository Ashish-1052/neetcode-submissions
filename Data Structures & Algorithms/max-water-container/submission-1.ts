class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0;
        let r = heights.length - 1;
        let maxArea = 0;
        while (l < r) {
            const currArea = (r - l) * Math.min(heights[l], heights[r]);
            maxArea = Math.max(currArea, maxArea);
            if (heights[l] > heights[r]) {
                r--;
            } else if (heights[r] > heights[l]) {
                l++;
            } else {
                r--;
                l++;
            }
        }
        return maxArea;
    }
}
