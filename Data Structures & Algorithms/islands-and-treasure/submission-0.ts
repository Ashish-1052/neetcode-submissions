class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const INF = 2147483647;
        const q: number[][] = [];
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === 0) q.push([row, col]);
            }
        }
        let head = 0;
        const dirs = [[1, 0], [-1 , 0], [0, 1], [0, -1]];
        while (head < q.length) {
            const size = q.length - head;
            for (let i = 0; i < size; i++) {
                const [r, c] = q[head++];
                for (let [rd, cd] of dirs) {
                    const cell = [r + rd, c + cd];
                    if (cell[0] >= 0 && cell[1] >= 0 && cell[0] < grid.length && cell[1] < grid[0].length) {
                        const cellVal = grid[r + rd][c + cd];
                        if (cellVal !== INF) continue; 
                        grid[r + rd][c + cd] = grid[r][c] + 1;
                        q.push(cell);
                    }
                }
            }
        }
    }
}
