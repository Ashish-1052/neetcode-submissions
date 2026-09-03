class CNode {
    public prev: CNode | null;
    public next: CNode | null;
    constructor(public key: number, public val: number){
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    private cache = new Map(); // key: [val, node]
    private left = new CNode(0, 0);
    private right = new CNode(0, 0);
    /**
     * @param {number} capacity
     */
    constructor(public capacity: number) {
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node: CNode) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        if (next) {
            next.prev = prev;
        }
    }

    insert(node: CNode) {
        const prev = this.right.prev;
        prev.next = node;
        node.prev = prev;
        this.right.prev = node;
        node.next = this.right;
    } 

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if(!this.cache.has(key)) {
            return - 1;
        }
        const node = this.cache.get(key);
        const val = node.val;
        this.remove(node);
        this.insert(node);
        return val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }
        const newNode = new CNode(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);
        if (this.cache.size > this.capacity) {
            const nodeToRemove = this.left.next;
            const key = nodeToRemove.key;
            this.cache.delete(key);
            this.remove(nodeToRemove);
        }
    }
}
