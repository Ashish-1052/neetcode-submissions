class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     * 41,30,29,28,27,40
     */
    dailyTemperatures(temperatures: number[]): number[] {
        if (temperatures.length  === 1) {
            return [0];
        }
        const stack: Array<Array<number>> = [] // [[ind, val], [ind, val]]
        const result = new Array(temperatures.length).fill(0);
        stack.push([0, temperatures[0]]);
        for (let i = 1; i < temperatures.length; i++) {
            let top = stack.at(-1);
            while (temperatures[i] > top[1]) {
                const ind = top[0];
                result[ind] = i - top[0];
                stack.pop();
                if (stack.length > 0) {
                    top = stack.at(-1);
                } else {
                    break;
                }
            }
            stack.push([i, temperatures[i]]);
        }
        return result;
    }
}
