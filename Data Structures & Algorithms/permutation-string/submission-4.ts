class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const key = new Array(26).fill(0);
        for (let s of s1) {
            const index = s.charCodeAt(0) - 'a'.charCodeAt(0);
            key[index] += 1;
        }
        for (let r = 0; r < s2.length; r++) {
            const compareKey = new Array(26).fill(0);
            let ind = s2[r].charCodeAt(0) - 'a'.charCodeAt(0);
            let point = r;
            while (key[ind] - compareKey[ind] > 0) {
                compareKey[ind] += 1;
                point++;
                if (point < s2.length) {
                    ind = s2[point].charCodeAt(0) - 'a'.charCodeAt(0);
                } else {
                    break;
                }
            }
            const compareStr = compareKey.join("#");
            const keyStr = key.join("#");
            console.log( {compareStr, keyStr} )
            if (compareStr === keyStr) return true;
        }
        return false;
    }
}
