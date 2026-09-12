class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let rowL = 0;
        let rowR = matrix.length - 1;

        while (rowL <= rowR) {
            const mid = Math.floor((rowL + rowR) / 2);
            if (matrix[mid][0] <= target && target <= matrix[mid].at(-1)) {
                let colL = 0;
                let colR = matrix[0].length;
                while (colL <= colR) {
                    const midC = Math.floor((colL + colR) / 2);
                    if (matrix[mid][midC] === target) return true;
                    if (matrix[mid][midC] > target) {
                        colR = midC - 1;
                    } else {
                        colL = midC + 1;
                    }
                }
                return false
            } else if (matrix[mid][0] > target) {
                rowR = mid - 1;
            } else if (matrix[mid].at(-1) < target) {
                rowL = mid + 1;
            }
        }
        return false;
    }
}
