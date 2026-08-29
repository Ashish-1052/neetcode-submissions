class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const buckets = new Map<string, string[]>(); // sorted chars -> anagrams
        for (let str of strs) {
            const keyArr = new Array(26).fill(0);
            for (let i = 0; i < str.length; i++) {
                keyArr[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            }
            const key = keyArr.join('#');
            const newArr = buckets.get(key) ?? [];
            newArr.push(str);
            buckets.set(key, newArr);   
        }
        return Array.from(buckets.values())
    }
}
