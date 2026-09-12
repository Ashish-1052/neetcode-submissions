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
        const q = [];
        function dfs(node: TreeNode | null): void {
            if (!node) return;
            q.push(node.val);
            dfs(node.left);
            dfs(node.right);
        }
        dfs(root);
        q.sort((a, b) => a - b);
        return q[k - 1];
    }
}
