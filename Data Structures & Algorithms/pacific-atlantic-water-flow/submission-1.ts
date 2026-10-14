class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        const pac = Array.from({ length: heights.length }, () => new Array(heights[0].length).fill(false));
        const at = Array.from({ length: heights.length }, () => new Array(heights[0].length).fill(false));


        for (let c = 0; c < heights[0].length; c++) {
            pac[0][c] = true;
            at[heights.length - 1][c] = true
        }
        for (let r = 0; r < heights.length; r++) {
            pac[r][0] = true;
            at[r][heights[0].length - 1] = true
        }

        function dfs(row: number, col: number, ocean: boolean[][]) {
            if (row > heights.length || col > heights[0].length) return; 
            for (let [rd, cd] of dirs) {
                const r = row + rd;
                const c = col + cd
                console.log({ r, c })
                if (
                    r < heights.length &&
                    c < heights[0].length &&
                    r >= 0 &&
                    c >= 0 &&
                    !ocean[r][c] &&
                    heights[r][c] >= heights[row][col]
                ) {
                    ocean[r][c] = true;
                    dfs(r, c, ocean);
                }
            }
        }

        
        for (let c = 0; c < heights[0].length; c++) {
            dfs(0, c, pac);
            dfs(heights.length - 1, c, at)
        }
        for (let r = 0; r < heights.length; r++) {
            dfs(r, 0, pac);
            dfs(r, heights[0].length - 1, at);
        }
        dfs(heights.length - 1, heights[0].length - 1, at);


        const res = [];

        for (let r = 0; r < heights.length; r++) {
            for (let c = 0; c < heights[0].length; c++) {
                if (pac[r][c] && at[r][c]) {
                    res.push([r, c]);
                }
            }
        }

        return res;
    }
}
