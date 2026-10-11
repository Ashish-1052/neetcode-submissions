class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let numberOfIslands = 0;
        const dirs = [[ 1, 0 ], [ 0, 1 ], [ -1, 0 ], [ 0, -1 ]];
        function dfs(row: number, col: number): void {
            if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === '0') return;
            grid[row][col] = '0';
            for (let dir of dirs) {
                dfs(row + dir[0], col + dir[1]);
            }
        }

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === '1') {
                    numberOfIslands++;
                    dfs(r, c);
                }
            }
        }

        return numberOfIslands;
    }
}
