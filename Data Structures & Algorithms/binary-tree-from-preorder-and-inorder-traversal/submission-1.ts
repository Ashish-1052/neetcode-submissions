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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        let preorderInd = 0;
        let inorderMap = new Map();
        inorder.map((i, ind) => inorderMap.set(i, ind));

        function dfs(left: number, right: number): TreeNode {
            if (left > right) return null;
            const rootVal = preorder[preorderInd++];
            const root = new TreeNode(rootVal);
            const mid = inorderMap.get(rootVal)
            root.left = dfs(left, mid - 1);
            root.right = dfs(mid + 1, right);
            return root;
        }

        return dfs(0, inorder.length - 1)
    }
}
