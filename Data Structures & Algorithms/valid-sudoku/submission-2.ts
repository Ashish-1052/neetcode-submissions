class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowMap = new Map<string, Set<string>>(); // row, set
        const colMap = new Map<string, Set<string>>(); // row, set
        const squareMap = new Map<string, Set<string>>(); // 'row:col', set

        for (let r = 0; r < 9; r++) {
            const toCheck = rowMap.get(`${r}`) || new Set();
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') continue;
                const toCheckCol = colMap.get(`${c}`) || new Set();
                const toCheckSquare = squareMap.get(`${Math.floor(r / 3)}:${Math.floor(c / 3)}`) || new Set(); 
                if (toCheck.has(board[r][c])) return false;
                if (toCheckCol.has(board[r][c])) return false;
                if (toCheckSquare.has(board[r][c])) return false;
                toCheck.add(board[r][c]);
                toCheckCol.add(board[r][c]);
                toCheckSquare.add(board[r][c]);
                rowMap.set(`${r}`, toCheck);
                colMap.set(`${c}`, toCheckCol);
                squareMap.set(`${Math.floor(r / 3)}:${Math.floor(c / 3)}`, toCheckSquare);
            }
        }

        return true;
    }
}
