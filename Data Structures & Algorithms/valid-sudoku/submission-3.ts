class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowMap = new Map(); // [row, set];
        const colMap = new Map(); // [col, set];
        const squareMap = new Map(); // [row / 3 # col / 3, set];

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                const cell = board[r][c];
                if (cell === '.') continue;
                const rowKey = `${r}`;
                const colKey = `${c}`;
                const squareMapKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;
                const rowSetToCheck = rowMap.get(rowKey) || new Set();
                const colSetToCheck = colMap.get(colKey) || new Set();
                const squareSetToCheck = squareMap.get(squareMapKey) || new Set();
                if (rowSetToCheck.has(cell) || colSetToCheck.has(cell) || squareSetToCheck.has(cell)) {
                    return false
                };
                rowSetToCheck.add(cell);
                colSetToCheck.add(cell);
                squareSetToCheck.add(cell);
                rowMap.set(rowKey, rowSetToCheck);
                colMap.set(colKey, colSetToCheck);
                squareMap.set(squareMapKey, squareSetToCheck);
            }
        }

        return true;
    }
}
