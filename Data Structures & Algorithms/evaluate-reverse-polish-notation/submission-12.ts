class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];
        for (let t of tokens) {
            if (isNaN(Number(t))) {
                const top1 = Number(stack.pop());
                const top2 = Number(stack.pop());
                if (t === '+') {
                    stack.push(top1 + top2);
                } else if (t === '-') {
                    stack.push(top2 - top1);
                } else if (t === '*') {
                    stack.push(top1 * top2);
                } else if (t === '/') {
                    stack.push(Math.trunc(top2 / top1));
                }
            } else {
                stack.push(Number(t));
            }
        }
        return stack[0];
    }
}
