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
        if (!root) return true;
        return this.isValid(root.left, -Infinity, root.val) && this.isValid(root.right, root.val, Infinity);
    }

    isValid(root: TreeNode | null, minVal: number, maxVal: number): boolean {
        if (!root) return true;
        if (root.val <= minVal || root.val >= maxVal) return false;
        if (root.left) {
            if (root.left.val >= root.val) return false;
        }
        if (root.right) {
            if (root.right.val <= root.val) return false;
        }
        if (root.right && root.right.val <= root.val) return false;
        return this.isValid(root.left, minVal, root.val) && this.isValid(root.right, root.val, maxVal);
    }
}
