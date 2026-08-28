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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let curr1 = list1;
        let curr2 = list2;
        let dummy = new ListNode(0);
        let curr = dummy;
        while (curr1 && curr2) {
            console.log('curr1', curr1);
            if (curr1.val <= curr2.val) {
                curr.next = new ListNode(curr1.val);
                curr1 = curr1.next;
            } else {
                curr.next = new ListNode(curr2.val);
                curr2 = curr2.next;
            }
            curr = curr.next;
        }

        while (curr1) {
            curr.next = new ListNode(curr1.val);
            curr1 = curr1.next;
            curr = curr.next;
        }

        while (curr2) {
            curr.next = new ListNode(curr2.val);
            curr2 = curr2.next;
            curr = curr.next;
        }

        return dummy.next;

    }
}
