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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        let isSub: boolean;
        const q = [];
        q.push(root);
        while (q.length > 0) {
            const top = q.shift();
            if (top.val === subRoot.val && this.isSameTree(top, subRoot)) {
                return true;
            }
            if (top.left) q.push(top.left)
            if (top.right) q.push(top.right);
        }
        return false;
    }

    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if (!q && !p) return true;
        if ((p && !q) || (!p && q)) return false;
        if (p.val === q.val) {
            return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
        }
        return false;
    }
}
