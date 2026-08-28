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
        if (!head) return;
        let curr = head;
        const nodes = [];
        while (curr) {
            let nextNode = curr.next;
            nodes.push(curr);
            curr.next = null;
            curr = nextNode;
        }

        let dummy = new ListNode(0, head);
        curr = dummy;
        let i = 0;
        while (i <= nodes.length / 2) {
            const left = nodes[i];
            const right = nodes.at(-1-i);
            if (!left || !right) break
            nodes[i] = null;
            nodes[nodes.length - i - 1] = null;

            if (i !== nodes.length - 1 - i) {
                curr.next = left;
                curr = curr.next;
                curr.next = right;
                curr = curr.next;
            } else {
                curr.next = left;
            }
            i++;
        }
    }
}
