class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        const adjacency = Array.from({ length: n }, () => []);
        for (let [a, b] of edges) {
            adjacency[a].push(b); 
            adjacency[b].push(a); 
        }

        const visiting = new Set();
        
        function dfs(node: number, parent: number): boolean { // true means no cycle found

            if (visiting.has(node)) {
                return false;
            }
            visiting.add(node);
            for (let n of adjacency[node]) {
                if (n === parent) continue;
                if (!dfs(n, node)) {
                    return false;
                }
            }
            return true;
        }

        return dfs(0, -1) && visiting.size === n;
    }
}
