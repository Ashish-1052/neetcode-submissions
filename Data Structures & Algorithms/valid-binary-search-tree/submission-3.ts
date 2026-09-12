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
    isValidBST(root: TreeNode | null): boolean {
        return this.valid(root);
    }

    valid(node: TreeNode | null, left: number = -Infinity, right: number = Infinity) {
        if (!node) return true;
        if (!(node.val > left && node.val < right)) {
            return false;
        }
        return this.valid(node.left, left, node.val) && this.valid(node.right, node.val, right);
    }
}
