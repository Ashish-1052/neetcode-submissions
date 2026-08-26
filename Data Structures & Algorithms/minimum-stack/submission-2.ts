class MinStack {
    private stack: Array<number>;
    private min: Array<number>;
    constructor() {
        this.stack = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        this.min.push(Math.min((this.min.at(-1) ?? Infinity), val));
    }

    /**
     * @return {void}
     */
    pop(): void {
        if (this.stack.length === 0) return null;
        this.stack.pop();
        this.min.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        if (this.stack.length === 0) return null;
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        if (this.stack.length === 0) return null;
        return this.min.at(-1);
    }
}
