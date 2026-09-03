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
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            const sumTo = -nums[i];
            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const sum = nums[l] + nums[r];
                if (sum > sumTo) {
                    r--;
                } else if (sum < sumTo) {
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
                    while (l < r && nums[l] === nums[l - 1]) l++;
                    while (l < r && nums[r] === nums[r + 1]) r--;
                }
            }
        }
        return result;
    }
}
