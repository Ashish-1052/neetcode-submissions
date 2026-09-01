class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded = '';
        for (let str of strs) {
            const length = str.length;
            encoded += `${length}:${str}`;
        }
        console.log('encoded', encoded)
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let decoded = [];
        let i = 0;
        let numStr = ''
        while (i < str.length) {
            if (str[i] === ':') {
                const length = Number(numStr);
                let curr = '';
                let pos = i;
                for (let j = pos + 1; j <= pos + length; j++) {
                    curr += str[j];
                }
                i = pos + length + 1;
                numStr = ''
                decoded.push(curr);
            } else {
                numStr += str[i];
                i++;
            }
        }
        return decoded;
    }
}
