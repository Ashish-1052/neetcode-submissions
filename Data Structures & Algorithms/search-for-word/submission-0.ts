class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const rows = board.length;
        const cols = board[0].length;
        const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
        function dfs(row: number, col: number, i: number): boolean {
            if (i === word.length) return true;
            if (
                row < 0 ||
                col < 0 ||
                row >= rows ||
                col >= cols ||
                board[row][col] !== word[i] ||
                visited[row][col]
            ) {
                return false;
            }
            visited[row][col] = true;
            const res = dfs(row + 1, col, i + 1) || dfs(row - 1, col, i + 1) || dfs(row, col + 1, i + 1) || dfs(row, col - 1, i + 1);
            visited[row][col] = false;
            return res;
        }
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (dfs(r,c,0)) return true;
            }
        }
        return false;
    }
}
