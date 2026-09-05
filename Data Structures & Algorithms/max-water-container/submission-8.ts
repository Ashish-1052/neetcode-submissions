class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let max = 0;

        while (left < right) {
            const area = (right - left) * Math.min(heights[left], heights[right]);
            max = Math.max(max, area);
            if (heights[left] > heights[right]) {
                right--;
            } else if (heights[left] < heights[right]) {
                left++;
            } else {
                left++;
                right--;
            }
        }

        return max;
    }
}
