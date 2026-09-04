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
     * hLeft - hRight <= 1
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        let maxDiff = 0;
        function dfs(node: TreeNode): void {
            if (!node) return;
            const lh = getHeight(node.left);
            const rh = getHeight(node.right);
            dfs(node.left);
            dfs(node.right);
            maxDiff = Math.max(maxDiff, Math.abs(lh-rh));
        }
        const getHeight = (node: TreeNode | null): number => {
            if (!node) return 0;
            return 1 + Math.max(getHeight(node.left), getHeight(node.right));
        }
        dfs(root);
        return maxDiff <= 1;
    }

}
