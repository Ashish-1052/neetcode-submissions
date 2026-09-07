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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let curr1 = l1;
        let curr2 = l2;
        let carry = 0;
        const dummy = new ListNode(0)
        let curr = dummy;

        while (curr1 || curr2 || carry) {
            const num1 = curr1 ? curr1.val : 0;
            const num2 = curr2 ? curr2.val : 0;
            const addition = num1 + num2 + carry;
            const toAdd = addition % 10;
            const carryF = Math.floor(addition / 10);
            const newNode = new ListNode(toAdd);
            curr.next = newNode;
            curr = curr.next;
            carry = carryF;
            if (curr1) curr1 = curr1.next
            if (curr2) curr2 = curr2.next
        }

        return dummy.next;
    }
}
