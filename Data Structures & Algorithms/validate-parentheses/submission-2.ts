class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        for (let char of s) {
            stack.push(char);
            let top = stack[stack.length - 1];
            if (stack.length < 2) continue;
            let secondTop = stack[stack.length - 2]
            if (
                secondTop === '[' && top === ']' ||
                secondTop === '(' && top === ')' ||
                secondTop === '{' && top === '}'
                ) {
                    stack.pop();
                    stack.pop();
                }
        }
        return stack.length == 0;
    }
}
