class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const rows = matrix.length;
        const cols = matrix[0].length;
        const allNums = [];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                allNums.push(matrix[r][c]);
            }
        }

        let left = 0;
        let right = allNums.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (allNums[mid] === target) return true;
            if (allNums[mid] > target) {
                right--;
            } else {
                left++;
            }
        }

        return false;
    }
}
