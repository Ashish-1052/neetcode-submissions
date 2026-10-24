class WordDictionary {
    private trie: PrefixTree;
    constructor() {
        this.trie = new PrefixTree();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        this.trie.insert(word);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        return this.trie.search(word);
    }
}

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
        return this.dfs(word, 0, this.root);
    }

    dfs(word: string, start: number, root: TrieNode) {
        let currentNode = root;

        for (let i = start; i < word.length; i++) {
            const w = word[i];
            if (w === '.') {
                const children = currentNode.children;
                for (let [, val] of children) {
                    if (this.dfs(word, i + 1, val)) {
                        return true;
                    }
                }
                return false;
            } else {
                if (!currentNode.children.has(w)) {
                    return false;
                }
                currentNode = currentNode.children.get(w);
            }
        }
        return currentNode.isEnd;
    }

}

