class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        const memo = new Map<number, number>() // memory
        function f(i: number): number { // tells what was the number of steps required
            if (i <= 1) return 1;
            if (memo.has(i)) return memo.get(i);
            const res = f(i-1) + f(i-2);
            memo.set(i, res);
            return res;
        }
        return f(n);
    }
}
