class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */

    minCostConnectPoints(points: number[][]): number {
        const n = points.length;
        const dsu = new DSU(n + 1);
        const edges = [];

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                const dist = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
                edges.push([i, j, dist]); 
            }
        }

        edges.sort((a, b) => a[2] - b[2]);

        let res = 0;
        let count = 0;
        for (const [u, v, dist] of edges) {
            if (dsu.union(u, v)) {
                res += dist;
                count++;
                if (count === n) break;
            }
        }
        return res;
    }
}

class DSU {
    private parent: number[];
    private rank: number[];
    constructor(n: number) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = Array(n).fill(1);
    }
    find(node: number): number {
        if (this.parent[node] !== node) {
            this.parent[node] = this.find(this.parent[node]);
        }
        return this.parent[node];
    }
    union(u: number, v: number): boolean {
        const pu = this.find(u);
        const pv = this.find(v);

        if (pu === pv) return false;
        if (this.rank[pu] < this.rank[pv]) this.parent[pu] = pv;
        else if (this.rank[pv] < this.rank[pu]) this.parent[pv] = pu;
        else {
            this.parent[pv] = pu;
            this.rank[pu]++;
        }
        return true;
    }
}
