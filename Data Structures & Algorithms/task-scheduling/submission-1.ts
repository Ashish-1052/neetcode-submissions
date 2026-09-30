class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks: string[], n: number): number {
        const count = new Array(26).fill(0);
        for (let task of tasks) {
            count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        }

        count.sort((a, b) => a - b);
        const maxF = count[25];
        let idle = (maxF - 1) * n;

        for (let i = 24; i >= 0; i--) {
            idle -= Math.min(count[i], maxF - 1);
        }

        return Math.max(0, idle) + tasks.length;
    }
}
