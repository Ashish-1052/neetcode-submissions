/**
 * Definition for a binary tree node.
 * diam = Math.max(diaL, diaR, hL + hR - 2)
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
        let res = 0;
        function dfs(node: TreeNode | null): number {
            if (!node) return 0;
            const diaL = dfs(node.left);
            const diaR = dfs(node.right);
            res = Math.max(diaL + diaR, res);
            return 1 + Math.max(diaL, diaR);
        }
        dfs(root);
        return res;
    }
}
