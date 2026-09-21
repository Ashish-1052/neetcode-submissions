class ListNode {
    constructor(public val: number, public key: number | null = null, public next: ListNode = null, public prev: ListNode = null){}
}

class LRUCache {
    private left: ListNode;
    private right: ListNode;
    private map: Map<number, ListNode>;
    /**
     * @param {number} capacity
     */
    constructor(public capacity: number) {
        this.left = new ListNode(0)
        this.right = new ListNode(0)
        this.left.next = this.right;
        this.right.prev = this.left;
        this.map = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (!this.map.has(key)) {
            return -1;
        }
        this.removeNode(this.map.get(key));
        this.addNode(this.map.get(key));
        return this.map.get(key).val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.map.has(key)) {
            this.removeNode(this.map.get(key));
        }
        const newNode = new ListNode(value, key);
        this.map.set(key, newNode);
        this.addNode(newNode);
        if (this.map.size > this.capacity) {
            this.map.delete(this.left.next.key)
            this.removeNode(this.left.next);
        }
    }

    removeNode(node: ListNode): void {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    addNode(node: ListNode): void {
        const prev = this.right.prev;
        prev.next = node;
        this.right.prev = node;
        node.next = this.right;
        node.prev = prev;
    }
}
