class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas: number[], cost: number[]): number {
        const totalGas = gas.reduce((a, c) => a + c, 0);
        const totalCost = cost.reduce((a, c) => a + c, 0);
        if (totalGas < totalCost) return -1;

        let res = 0;
        let tank = 0;
        for (let i = 0; i < gas.length; i++) {
            tank += gas[i] - cost[i];
            if (tank < 0) {
                tank = 0;
                res = i + 1;
            }
        }
        return res;
    }
}
