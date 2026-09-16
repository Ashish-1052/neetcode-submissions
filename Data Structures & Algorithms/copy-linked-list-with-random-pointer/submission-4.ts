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
        if (!head) return null
        let curr = head;
        const map = new Map<Node, Node>(); // [og, c]
        while (curr) {
            map.set(curr, new Node(curr.val));
            curr = curr.next;
        }
        curr = head;
        while (curr) {
            const copy = map.get(curr);
            const nextCopy = map.get(curr.next) ?? null;
            const randomCopy = map.get(curr.random) ?? null;
            copy.next = nextCopy;
            copy.random = randomCopy;
            curr = curr.next;
        }
        return map.get(head);
    }
}
