class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];
        for (let token of tokens) {
            if (token === '+' || token === '-' || token === '*' || token === '/') {
                let res: number;
                if (token === '+') {
                    res = stack.at(-2) + stack.at(-1);
                }
                if (token === '-') {
                    res = stack.at(-2) - stack.at(-1);
                }
                if (token === '*') {
                    res = stack.at(-2) * stack.at(-1);
                }
                if (token === '/') {
                    res = Math.trunc(stack.at(-2) / stack.at(-1));
                }
            stack.pop();
                stack.pop();
                stack.push(res);
            } else {
                stack.push(Number(token));
            }
        }
        return  Number(stack.at(-1))
    }
}
