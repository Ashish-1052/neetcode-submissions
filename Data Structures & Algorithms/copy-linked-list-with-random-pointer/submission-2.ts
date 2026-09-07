// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        const nodeMap = new Map<Node, Node>(); /// [og, copy]
        if (!head) return null;
        let curr = head;
        while (curr) {
            const copy = new Node(curr.val);
            nodeMap.set(curr, copy);
            curr = curr.next;
        }
        curr = head;
        while (curr) {
            const copy = nodeMap.get(curr);
            const next = curr.next;
            const random = curr.random;
            const nextC = nodeMap.get(next) ?? null;
            const nextR = nodeMap.get(random) ?? null;
            copy.next = nextC;
            copy.random = nextR;
            curr = curr.next;
        }
        return nodeMap.get(head);
    }
}
