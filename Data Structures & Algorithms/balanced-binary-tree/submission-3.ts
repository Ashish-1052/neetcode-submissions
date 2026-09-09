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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        function dfs(node: TreeNode | null): number[]  {
            if (!node) return [0, 1]
            const hLeft = dfs(node.left);
            const hRight = dfs(node.right);
            const height = 1 + Math.max(hLeft[0], hRight[0]);
            const isBalanced = Math.abs(hLeft[0] - hRight[0]) <= 1 && hLeft[1] === 1 && hRight[1] === 1;
            return [height, isBalanced ? 1 : 0];
        }
        return dfs(root)[1] === 1;
    }
}
