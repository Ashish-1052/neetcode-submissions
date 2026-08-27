class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let oLeft = 0;
        let oRight = rows - 1;

        while (oLeft <= oRight) {
            const mid = Math.floor((oLeft + oRight) / 2);
            if (target >= matrix[mid][0] && target <= matrix[mid][cols - 1]) {
                let iLeft = 0;
                let iRight = cols - 1;
                while (iLeft <= iRight) {
                    const midI = Math.floor((iLeft + iRight) / 2);
                    if (matrix[mid][midI] === target) return true;
                    if (matrix[mid][midI] > target) {
                        iRight--;
                    } else {
                        iLeft++;
                    }
                }
                return false;
            }
            if (target < matrix[mid][0]) {
                oRight--;
            } else {
                oLeft++;
            }
        }

        return false
    }
}
