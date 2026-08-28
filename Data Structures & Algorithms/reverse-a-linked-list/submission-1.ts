/**
 * Definition for singly-linked list.
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        const allNodes = [];
        let curr = head;
        if (!head) return null;
        while (curr) {
            allNodes.push(curr.val);
            curr = curr.next;
        }
        let dummy = new ListNode(0);
        let curN = dummy;
        for (let i = allNodes.length - 1; i >= 0; i--) {
            curN.next = new ListNode(allNodes[i]);
            curN = curN.next
        }
        return dummy.next;
    }
}
