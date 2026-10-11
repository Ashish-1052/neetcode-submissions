/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        if (!node) return null;
        const nodeMap = new Map<Node, Node> // og, clone
        function dfs(node: Node | null): void {
            if (!node) return
            const clone = new Node(node.val);
            nodeMap.set(node, clone);
            if (!node.neighbors || node.neighbors.length === 0) return;
            for (let neighbor of node.neighbors) {
                if (!nodeMap.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        }
        dfs(node);
        const visited = new Set<Node>();
        visited.add(node);
        function bfs(node: Node | null): void {
            const queue = [node];
            let head = 0;
            while (head < queue.length) {
                const top = queue[head++];
                const clone = nodeMap.get(top);
                const cloneNeighbors = [];
                for (let neighbor of top.neighbors) {
                    cloneNeighbors.push(nodeMap.get(neighbor));
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor)
                        visited.add(neighbor)
                    }
                }
                clone.neighbors = cloneNeighbors;
            }
        }
        bfs(node);
        return nodeMap.get(node);
    }

}
