/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        const nodeArr: ListNode[] = [];
        const dummy = new ListNode(0, head);
        let curr = dummy;
        while (curr) {
            nodeArr.push(curr);
            curr = curr.next;
        }
        const index = nodeArr.length - n;
        const nodeToRemove = nodeArr[index];
        const prev = nodeArr[index-1];
        const next = nodeArr[index+1] ?? null;
        nodeToRemove.next = null;
        prev.next = next;
        return dummy.next;
    }
}
