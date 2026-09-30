class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res = [[]];

        for(let num of nums) {
            const size = res.length;
            for (let i = 0; i < size; i++) {
                const subset = [...res[i]];
                subset.push(num);
                res.push(subset);
            }
        }

        return res;
    }
}
