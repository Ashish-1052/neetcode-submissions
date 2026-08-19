class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const buckets = new Map<string, string[]>(); // sorted chars -> anagrams
        for (let str of strs) {
            const key = str.split('').sort().join('');
            const newArr = buckets.get(key) ?? [];
            newArr.push(str);
            buckets.set(key, newArr);   
        }
        return Array.from(buckets.values())
    }
}
