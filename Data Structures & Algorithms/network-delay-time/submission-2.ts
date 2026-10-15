class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {
        const adjacency = Array.from({ length: n + 1 }, () => []);
        for (let [u, v, t] of times) {
            adjacency[u].push([v, t]);
        }
        const result = new Array(n + 1).fill(-1);

        function dfs(node: number, time: number = 0) {
            if (result[node] !== -1 && result[node] <= time) return;
            result[node] = time
            for (let [v, t] of adjacency[node]) {
                dfs(v, time + t);
            }
        }

        dfs(k);
        let maxTime = 0;

        for (let i = 1; i < n + 1; i++) {
            if (result[i] === -1) return -1;
            maxTime = Math.max(maxTime, result[i]);
        }

        return maxTime;
    }
}
