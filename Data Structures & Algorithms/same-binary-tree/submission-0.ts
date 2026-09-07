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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        const arr1 = this.bfs(p);
        const arr2 = this.bfs(q);
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] && arr2[i]) {
                if (arr1[i].val !== arr2[i].val) {
                    // console.log({ val1: arr1[i].val, val2: arr2[i].val })
                    return false;
                }
            } else if (arr1[i] !== null || arr2[i] !== null) {
                // console.log({ val1: arr1[i], val2: arr2[i] })
                return false;
            }
        }
        return true;
    }

    bfs(node: TreeNode): TreeNode[] {
        const queue = [];
        queue.push(node);
        const nodeVals = [];
        while (queue.length > 0) {
            const top = queue.pop();
            nodeVals.push(top);
            if (top) queue.push(top.left);
            if (top) queue.push(top.right);
        }
        return nodeVals;
    }
}
