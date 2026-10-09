class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        const result = [];
        const subset = [];

        function isPalindrome(t: string): boolean {
            let l = 0, r = t.length - 1;
            while (l < r) if (t[l++] !== t[r--]) return false;
            return true;
        }

        function dfs(startInd: number): void {
            if (startInd === s.length) {
                result.push([...subset]);
                return;
            }

            for (let i = startInd; i < s.length; i++) {
                const piece = s.slice(startInd, i + 1);
                if (!isPalindrome(piece)) continue;
                subset.push(piece);
                dfs(i + 1);
                subset.pop();
            }

        }

        dfs(0);
        return result;
    }
}
