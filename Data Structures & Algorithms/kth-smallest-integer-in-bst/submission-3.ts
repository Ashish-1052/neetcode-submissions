/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        const arr = [];
        let smallest: number
        function dfs(node: TreeNode): void {
            if (arr.length === k) {
                smallest = arr[k-1];
                return;
            }
            if (!node) return;
            dfs(node.left);
            // if (arr.length === k) {
            //     smallest = arr[k-1];
            //     return;
            // }
            arr.push(node.val)
            // if (arr.length === k) {
            //     smallest = arr[k-1];
            //     return;
            // }
            dfs(node.right);
        }
        dfs(root)
        return smallest
    }
}
