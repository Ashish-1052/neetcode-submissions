/**
 * Definition for singly-linked list.
 * s, f
 * 1, 2
 * 2, 4
 * 3, 2,
 * 4, 4,
 * 1, 2
 * 2, 4,
 * 3, 2
 * 4, 4
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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        if (!head) return false;
        let slow = head;
        let fast = head.next;

        while (slow && fast) {
            if (slow.val === fast.val) return true;
            slow = slow.next;
            fast = fast.next;
            if (fast && fast.next) {
                fast = fast.next;
            } else return false;
        } 
        return false;
    }
}
