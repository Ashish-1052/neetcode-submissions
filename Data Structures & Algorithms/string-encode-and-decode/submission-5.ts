class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string { // using length#stringlength#string
        let result = "";
        for (let str of strs) {
            const len = str.length;
            result += `${len}#${str}`
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result = [];
        let currLenStr = '';
        let i = 0;
        while (i < str.length) {
            if (str[i] !== '#') {
                currLenStr += str[i];
                i++
            } else {
                const currLen = Number(currLenStr);
                let currStr = '';
                i++
                for (let j = i; j < i + currLen; j++) {
                    currStr += str[j];
                }
                result.push(currStr);
                i = i + currLen;
                currLenStr = '';
            }
        }
        return result
    }
}
