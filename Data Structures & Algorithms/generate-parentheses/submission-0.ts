class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     * 1. simply append ()
     * 2. bracket it around one of the present pairs -> n pairs = n combinations
     * 3. bracket it around everything
     */
    generateParenthesis(n: number): string[] {
        const res = [];

        function dfs(open: number, closed: number, stack: string): void {
            if (open === closed && open === n) {
                res.push(stack);
                return;
            }
            if (open < n) {
                dfs(open + 1, closed, stack + '(');
            }
            if (closed < open) {
                dfs(open, closed + 1, stack + ')');
            }
        }
        dfs(0, 0, '');
        return res;
    }
}
