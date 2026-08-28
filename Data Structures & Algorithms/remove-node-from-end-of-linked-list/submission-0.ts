/**
 * Definition for singly-linked list.
 * 1,2,3,4,5,6 -> 2
 * (length - n + 1)th
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
        let length = 0;
        let curr = head;
        while (curr) {
            length++;
            curr = curr.next;
        }
        let toGoAhead = length - n;
        let pos = 1;
        let dummy = new ListNode(0, head);
        curr = head;
        let prev = dummy;
        while (pos <= toGoAhead) {
            curr = curr.next;
            prev = prev.next;
            pos++;
        }
        prev.next = curr.next;
        return dummy.next;
    }
}
