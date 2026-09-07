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
        if (this.isTreeSame(root, subRoot)) return true;
        return (this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot));
    }

    isTreeSame(p: TreeNode, q: TreeNode): boolean {
        if (!p && !q) return true;
        if (p && q && p.val === q.val) {
            return this.isTreeSame(p.left, q.left) && this.isTreeSame(p.right, q.right)
        }
        return false;
    }
}
