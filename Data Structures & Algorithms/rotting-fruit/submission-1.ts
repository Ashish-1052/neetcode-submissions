class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        let freshCount = 0;
        const rottenRowCol = [];
        for (let row  = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === 1) freshCount++;
                if (grid[row][col] === 2) rottenRowCol.push([row,col]);
            }
        }
        if (freshCount === 0) return 0;
        let head = 0;
        const dirs = [[ 1, 0 ], [ 0, 1 ], [ -1, 0 ], [ 0, -1 ]];
        let minutes = 0;
        while (head < rottenRowCol.length) {
            const queueSize = rottenRowCol.length - head;
            for (let i = 0; i < queueSize; i++) {
                const top = rottenRowCol[head++];
                for (const [rd, cd] of dirs) {
                    const row = top[0] + rd;
                    const col = top[1] + cd;
                    if (row >= grid.length || col >= grid[0].length || col < 0 || row < 0 || grid[row][col] !== 1) {
                        continue;
                    }
                    grid[row][col] = 2;
                    freshCount--;
                    rottenRowCol.push([row, col]);
                }
            }
            minutes++;
            if (freshCount === 0) break;
        }
        return freshCount === 0 ? minutes : -1;
    }
}
