class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const graph = Array.from({ length: n }, () => []);
        for (let edge of edges) {
            graph[edge[0]].push(edge[1]);
            graph[edge[1]].push(edge[0]);
        }

        let components = 0;
        const visited = new Set();
        function bfs(n: number) { // index
            if (visited.has(n)) return;
            const q = [n];
            let head = 0;
            visited.add(0);

            while (head < q.length) {
                const element = q[head++];
                for (let n of graph[element]) {
                    if (!visited.has(n)) {
                        visited.add(n);
                        q.push(n);
                    }
                }
            }
            components++;
        }
        for (let i = 0; i < n; i++) {
            bfs(i);
        }
        return components
    }
}
