class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const q = [];
        for (let t of tokens) {
            const element = Number(t);
            if (q.length === 0 || !isNaN(element)) {
                q.push(element);
            } else {
                const top1 = q.pop();
                const top2 = q.pop();
                let res: number;
                if (t === '+') {
                    res = top2 + top1;
                } else if (t === '-') {
                    res = top2 - top1;
                } else if (t === '*') {
                    res = top2 * top1;
                } else if (t === '/') {
                    res = Math.trunc(top2 / top1);
                }
                q.push(res);
            }
        }
        return q[0];
    }
}
