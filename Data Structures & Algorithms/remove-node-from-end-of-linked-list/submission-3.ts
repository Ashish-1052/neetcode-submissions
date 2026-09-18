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
        const dummy = new ListNode(0, head);
        let curr = dummy;
        for (let i = 1; i <= n; i++) {
            curr = curr.next;
        }
        let toRemove = head;
        let prev = dummy;
        while (curr.next) {
            curr = curr.next;
            toRemove = toRemove.next;
            prev = prev.next;
        }
        prev.next = toRemove.next;
        return dummy.next;
    }
}
