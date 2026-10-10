class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        if (digits === '') return [];
        const res = [];

        const digitMap = new Map();
        digitMap.set('2', ['a', 'b', 'c']);
        digitMap.set('3', ['d', 'e', 'f']);
        digitMap.set('4', ['g', 'h', 'i']);
        digitMap.set('5', ['j', 'k', 'l']);
        digitMap.set('6', ['m', 'n', 'o']);
        digitMap.set('7', ['p', 'q', 'r', 's']);
        digitMap.set('8', ['t', 'u', 'v']);
        digitMap.set('9', ['w', 'x', 'y', 'z']);


        function dfs(index: number, currStr: string) {
            if (currStr.length === digits.length) {
                res.push(currStr);
                return;
            }
            const choices = digitMap.get(digits[index]);
            for (let c of choices) {
                dfs(index + 1, currStr + c);
            }
        }

        dfs(0, '');
        return res;
    }
}
