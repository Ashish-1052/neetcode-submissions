class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result = [];
        const tripletSet = new Set();
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length; i++) {
            const sumTo = -nums[i];
            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                if (nums[l] + nums[r] > sumTo) {
                    r--;
                } else if (nums[l] + nums[r] < sumTo) {
                    l++;
                } else {
                    const newTriplet = [nums[i], nums[l], nums[r]]
                    const key = newTriplet.join('#');
                    if (!tripletSet.has(key)) {
                        result.push(newTriplet);
                        tripletSet.add(key);
                    }
                    l++;
                    r--;
                }
            }
        }
        return result;
    }
}
