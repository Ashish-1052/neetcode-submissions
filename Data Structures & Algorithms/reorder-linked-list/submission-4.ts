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
        const arr = [];
        let curr = head;
        while (curr) {
            const next = curr.next;
            curr.next = null;
            arr.push(curr);
            curr = next;
        }
        let curr2 = arr[0];
        if (arr.length === 1 || arr.length === 0) return;
        curr2.next = arr.at(-1);
        curr2 = curr2.next;
        for (let i = 1; i <= (arr.length - 1) / 2; i++) {
            const c = arr[i];
            const c2 = arr[arr.length - i - 1];
            if (i !== arr.length - i - 1) {
                c.next = c2;
            }
            curr2.next = c;
            curr2 = c2
        }
    }
}
