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
        if (!head) return null;
        const map = new Map();
        let curr = head;
        while (curr) {
            const copy = new Node(curr.val);
            map.set(curr, copy);
            curr = curr.next;
        }

        for (let [o, c] of map) {
            const next = o.next;
            const random = o.random;
            if (next) {
                const nextCopy = map.get(next);
                c.next = nextCopy;
            }
            if (random) {
                const randomCopy = map.get(random);
                c.random = randomCopy;
            }
        }

        return map.get(head);
    }
}
