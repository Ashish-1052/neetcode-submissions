class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s2.length < s1.length) return false;
        const s1Arr = new Array(26).fill(0);
        const s2Arr = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            const ind1 = s1.charCodeAt(i) - 'a'.charCodeAt(0);
            const ind2 = s2.charCodeAt(i) - 97;
            s1Arr[ind1]++;
            s2Arr[ind2]++;
        }
        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Arr[i] === s2Arr[i]) matches++; 
        }
        let left = 0;
        for (let right = s1.length; right < s2.length; right++) {
            if (matches === 26) return true;
            const indRemove = s2.charCodeAt(left) - 'a'.charCodeAt(0);
            const indtoAdd = s2.charCodeAt(right) - 'a'.charCodeAt(0);
            s2Arr[indtoAdd]++;
            if (s1Arr[indtoAdd] === s2Arr[indtoAdd]) {
                matches++;
            } else if (s1Arr[indtoAdd] === s2Arr[indtoAdd] - 1) {
                matches--;
            }
            s2Arr[indRemove]--;
            if (s1Arr[indRemove] === s2Arr[indRemove]) {
                matches++;
            } else if (s1Arr[indRemove] === s2Arr[indRemove] + 1) {
                matches--;
            }
            left++;
        }
        if (matches === 26) return true;
        return false
    }
}
