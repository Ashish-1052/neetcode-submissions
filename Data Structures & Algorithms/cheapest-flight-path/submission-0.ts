class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(
        n: number,
        flights: number[][],
        src: number,
        dst: number,
        k: number,
    ): number {
        const prices = new Array(n).fill(Infinity); // price to reach index i from source
        prices[src] = 0;
        const adj = Array.from({ length: n }, () => []);

        for (let [u, v, p] of flights) {
            adj[u].push([v, p]);
        }

        const queue = [[0, src, 0]]; // [price, node, stops];
        let head = 0;

        while (head < queue.length) {
            const [price, node, stops] = queue[head++];

            if (stops > k) break;

            for (let [nei, p] of adj[node]) {
                const nextPrice = price + p;
                if (nextPrice < prices[nei]) {
                    prices[nei] = nextPrice;
                    queue.push([nextPrice, nei, stops + 1]);
                }
            }
        }

        return prices[dst] === Infinity ? -1 : prices[dst];
    }
}