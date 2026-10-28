class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     * 1. visit all those 'o's which are on the edge
     * 2. run a bfs for all the regions so that we dont visit them
     * 3. now, start from the 1, 1 cell and check only within leagth - 1, so that we dont see edges
     * 4. run a bfs on these and then mark as 'X' if the region doesn't reach an '0' that is connected to an 'O' at the edge.
     * 5. if a neighbor is 
     */
    solve(board: string[][]): void {
        const m = board.length;
        const n = board[0].length;
        const visited = Array.from({ length: m }, () => new Array(n).fill(0));
        const q = [];
        for (let i = 0; i < m; i++) {
            if (board[i][n-1] === 'O') q.push([i, n-1]);
            if (board[i][0] === 'O') q.push([i, 0]);
        }
        for (let i = 0; i < n; i++) {
            if (board[m-1][i] === 'O') q.push([m-1, i]);
            if (board[0][i] === 'O') q.push([0, i]);
        }
        let head = 0;
        while (head < q.length) {
            const element = q[head++];
            const eR = element[0];
            const eC = element[1];
            if (eR >= m || eC >= n || eR < 0 || eC <= 0) {
                continue;
            }

            visited[eR][eC] = 1;
            const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
            for (let [r, c] of dirs) {
                const row = r + eR;
                const col = c + eC;
                if (row >= m || col >= n || row < 0 || col < 0 || visited[row][col] === 1 || board[row][col] === 'X') continue;
                q.push([row, col]);
            }
        }
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === 'O' && !visited[i][j] && i > 0 && j > 0 && i < m - 1 && j < n - 1) {
                    board[i][j] = 'X';
                }
            }
        }
    }
}
