class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        let maxArea = 0;
        const dirs = [[ 1, 0 ], [ 0, 1 ], [ -1, 0 ], [ 0, -1 ]];

        function dfs(row: number, col: number): number {
            if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 0) return 0;
            grid[row][col] = 0;
            let res = 1;
            for (let dir of dirs) {
                res += dfs(row + dir[0], col + dir[1]);
            }
            return res;
        }

        let area = 0;

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === 1) {
                    area = dfs(row, col);
                    maxArea = Math.max(area, maxArea);
                }
            }
        }

        return maxArea;
    }
}
