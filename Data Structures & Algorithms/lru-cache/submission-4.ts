class ListNode {
    constructor(public val: number = 0, public next?: ListNode, public prev?: ListNode, public key?: number){}
}

class LRUCache {
    private cache: Map<number, ListNode>;
    private left: ListNode;
    private right: ListNode;
    /**
     * @param {number} capacity
     */
    constructor(private capacity: number) {
        this.cache = new Map<number, ListNode>();
        this.left = new ListNode();
        this.right = new ListNode();
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (!this.cache.has(key)) return -1;
        const node = this.cache.get(key);
        const value = node.val;
        this.removeLN(node);
        this.addLN(node);
        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.removeLN(this.cache.get(key));
        }
        const node = new ListNode(value, null, null, key);
        this.addLN(node);
        this.cache.set(key, node);
        if (this.cache.size > this.capacity) {
            this.cache.delete(this.left.next.key);
            this.removeLN(this.left.next);
        }
    }

    removeLN(node: ListNode): void {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    addLN(node: ListNode): void {
        const prev = this.right.prev;
        prev.next = node;
        node.prev = prev;
        this.right.prev = node;
        node.next = this.right;
    }

}
