class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack = []; // index, val
        const result = new Array(temperatures.length).fill(0);
        for (let i = 0; i < temperatures.length; i++) {
            const toPush = [i, temperatures[i]];
            while (stack.length >= 1 && toPush[1] > stack.at(-1)[1]) {
                const toWrite = stack.pop();
                result[toWrite[0]] = toPush[0] - toWrite[0];
            }
            stack.push(toPush);
        }
        return result;
    }
}
