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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        let curr = head;
        const arr = [];
        while (curr) {
            arr.push(curr);
            const next = curr.next;
            curr.next = null;
            curr = next;
        }
        const dummy = new ListNode(0)
        curr = dummy;
        for (let i = 0; i < arr.length / 2; i++) {
            const left = arr[i];
            const right = arr[arr.length - 1 - i];
            if (i !== arr.length - 1 - i) {
                curr.next = left;
                left.next = right;
                curr = right;
            } else {
                curr.next = left;
                curr = curr.next;
            }
        }
        return 
    }
}
