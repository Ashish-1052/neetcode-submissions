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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        const res = [];
        function dfs(node: TreeNode, depth: number = 1) {
            if (!node) return;
            if (!res[depth]) {
                res[depth] = [];
            } 
            res[depth].push(node.val);
            dfs(node.left, depth + 1);
            dfs(node.right, depth + 1);
        }
        dfs(root);
        return res.slice(1);
    }
}
