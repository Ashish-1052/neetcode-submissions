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

        function dfs(node: TreeNode, depth = 0): void {
            if (!node) return;
            if (res.length === depth) {
                res[depth] = [];
            }
            res[depth].push(node.val);
            dfs(node.left, depth + 1)
            dfs(node.right, depth + 1);
        }
        dfs(root);
        const res2 = res.map(arr => arr.at(-1));
        return res2;
    }
}
