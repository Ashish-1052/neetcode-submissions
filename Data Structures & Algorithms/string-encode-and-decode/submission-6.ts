class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded = '';
        for (let s of strs) {
            const length = s.length;
            encoded += `${length}@${s}`;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decoded = [];
        let running = ''
        let i = 0;
        while (i < str.length) {
            if (str[i] === '@') {
                const length = Number(running);
                let current = ''
                for (let j = i + 1; j <= i + length; j++) {
                    current += str[j];
                }
                decoded.push(current);
                i = i + length + 1;
                running = '';
            } else {
                running += str[i];
                i++;
            }
        }
        return decoded;
    }
}
