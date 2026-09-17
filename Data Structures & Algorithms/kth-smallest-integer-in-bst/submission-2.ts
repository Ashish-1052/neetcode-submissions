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
        let arr: number[] = [];
        function dfs(node: TreeNode) {
            if (!node) return;
            dfs(node.left);
            if (arr.length === k) return
            arr.push(node.val);
            if (arr.length === k) return
            dfs(node.right);
        }
        dfs(root);
        return arr.at(-1);
    }
}
