class Solution {
    /**
     * @param {character[][]} board
     * 3 sets check all 3 in a go
     * for squares it will be rows / 3, col / 3 floored key
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = new Map<number, Set<string>>();
        const cols = new Map<number, Set<string>>();
        const squares = new Map<string, Set<string>>();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] == '.') continue;
                const squarekey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`
                if (
                    rows.get(r) && rows.get(r).has(board[r][c]) || 
                    cols.get(c) && cols.get(c).has(board[r][c]) || 
                    squares.get(squarekey) && squares.get(squarekey).has(board[r][c])
                ) {
                    return false;
                }

                if (!rows.get(r)) rows.set(r, new Set<string>)
                if (!cols.get(c)) cols.set(c, new Set<string>)
                if (!squares.get(squarekey)) squares.set(squarekey, new Set<string>)

                rows.get(r).add(board[r][c]);
                cols.get(c).add(board[r][c]);
                squares.get(squarekey).add(board[r][c]);
            }
        }
        return true
    }
}
