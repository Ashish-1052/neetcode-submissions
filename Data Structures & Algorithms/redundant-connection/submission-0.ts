class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        const n = edges.length;
        const seen = new Set();
        const graph = Array.from({ length: n + 1 }, () =>[]);
        function dfs(curr: number, path: Set<number> = new Set(), parent: number = -1) {
            if (path.has(curr)) return true;
            for (let nei of graph[curr]) {
                if (nei === parent) continue;
                if (dfs(nei, path.add(curr), curr)) return true
            }
            return false;
        }
        dfs(1);
        for (const [u, v] of edges) {
            graph[u].push(v)
            graph[v].push(u)
            if (dfs(u)) {
                console.log()
                return [u,v];
            }
        }
        return []
    }
}
