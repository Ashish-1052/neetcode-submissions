class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const tempInd = temperatures.map((item, index) => [item, index]);
        const res = new Array(temperatures.length).fill(0);
        const q = [];
        for (let el of tempInd) {
            if (q.length === 0) {
                q.push(el);
            } else {
                while (q.length > 0 && q.at(-1)[0] < el[0]) {
                    res[q.at(-1)[1]] = el[1] - q.at(-1)[1];
                    q.pop();
                }
                q.push(el);
            }
        }
        return res;
    }
}
