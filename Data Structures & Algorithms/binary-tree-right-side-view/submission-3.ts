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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        const res = [];
        function dfs(node: TreeNode, depth = 0) {
            if (!node) return;
            if (!res[depth]) {
                res[depth] = [];
            }
            res[depth] = node.val;
            dfs(node.left, depth + 1);
            dfs(node.right, depth + 1);
        }
        dfs(root);
        return res;
    }
}
