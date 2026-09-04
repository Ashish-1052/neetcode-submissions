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
        function dfs(node: TreeNode): [boolean, number] {
            if (!node) return [true, 0];
            const left = dfs(node.left);
            const right = dfs(node.right);

            const balanced = left[0] === true && right[0] === true && Math.abs(left[1] - right[1]) <= 1;
            const height = 1 + Math.max(left[1], right[1]);
            return [balanced, height];
        }
        return dfs(root)[0];
    }

}
