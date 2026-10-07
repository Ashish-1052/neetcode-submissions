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
        const mapInorder = new Map();
        let preOrderIndex = 0;
        inorder.map((item, index) => mapInorder.set(item, index));

        function dfs(left: number, right: number): TreeNode | null {
            if (left > right) return null;
            const rootVal = preorder[preOrderIndex++];
            const mid = mapInorder.get(rootVal);
            const root = new TreeNode(rootVal);
            root.left = dfs(left, mid - 1);
            root.right = dfs(mid + 1, right);
            return root;
        }

        return dfs(0, inorder.length - 1)
    }
}
