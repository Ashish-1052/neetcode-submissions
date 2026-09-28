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
    goodNodes(root: TreeNode | null): number {
        if (!root) return 0;
        let count = 0;

        function dfs(node: TreeNode, maxVal: number) {
            if (!node) return;
            if (node.val >= maxVal) count++;
            const nextMax = Math.max(node.val, maxVal);
            dfs(node.left, nextMax);
            dfs(node.right, nextMax);
        }
        dfs(root, root.val);
        return count;
    }
}
