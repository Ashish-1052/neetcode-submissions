/**
 * Definition for a binary tree node.
 * 1, 2, 4, 5, 3
 * 2, 4, 5
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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (!subRoot) return true;
        if (!root) return false;
        if (this.isSameTree(root, subRoot)) return true;
        return (this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot));
    }

    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if (!p && !q) return true;
        if (!p || !q) return false;
        if (p.val !== q.val) return false
        if (p.val === q.val) {
            return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
        }
    }
}
