class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;
        const s1compare = new Array(26).fill(0);
        const s2compare = new Array(26).fill(0);
        let matches = 0;
        for (let i = 0; i < s1.length; i++) {
            s1compare[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            s2compare[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        for (let i = 0; i < 26; i++) {
            if (s1compare[i] === s2compare[i]) {
                matches++;
            }
        }
        console.log({s1compare, s2compare})

        let l = 0;
        for (let right = s1.length; right < s2.length; right++) {
            if (matches === 26) return true;
            const index = s2.charCodeAt(right) - 'a'.charCodeAt(0);
            s2compare[index]++;
            if (s1compare[index] === s2compare[index]) {
                matches++;
            } else if (s1compare[index] === s2compare[index] - 1) {
                matches--;
            }
            const indexL = s2.charCodeAt(l) - 'a'.charCodeAt(0);
            s2compare[indexL]--;
            if (s1compare[indexL] === s2compare[indexL]) {
                matches++;
            } else if (s1compare[indexL] - 1 === s2compare[indexL]) {
                matches--;
            }
            l++;
        }

        return matches === 26;

    }
}
