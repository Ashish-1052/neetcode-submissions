class TrieNode {
    public children: Map<string, TrieNode>;
    public isEnd: boolean;

    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class PrefixTree {
    private root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let currentNode = this.root;

        for (let w of word) {
            if (!currentNode.children.has(w)) {
                currentNode.children.set(w, new TrieNode());
            }
            currentNode = currentNode.children.get(w);
        }

        currentNode.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let currentNode = this.root;

        for (let w of word) {
            if (!currentNode.children.has(w)) {
                return false;
            }
            currentNode = currentNode.children.get(w);
        }

        return currentNode.isEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let currentNode = this.root;

        for (let w of prefix) {
            if (!currentNode.children.has(w)) {
                return false;
            }
            currentNode = currentNode.children.get(w);
        }

        return true;
    }
}
