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
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        let maxD = 0;

        function dfs(node: TreeNode): number {
            if (!node) return 0;
            const left = dfs(node.left);
            const right = dfs(node.right);
            maxD = Math.max(left + right, maxD);
            return 1 + Math.max(left, right);
        }

        dfs(root);

        return maxD;
    }
}
