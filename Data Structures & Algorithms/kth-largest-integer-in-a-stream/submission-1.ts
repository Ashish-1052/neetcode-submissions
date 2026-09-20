class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(private k: number, private nums: number[]) {}

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.nums.push(val);
        this.nums.sort((a, b) => b - a);
        return this.nums[this.k - 1];
    }
}
