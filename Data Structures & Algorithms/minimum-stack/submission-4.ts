class MinStack {
    private stack: number[];
    private min: number[];
    constructor() {
        this.stack = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        // console.log({stack: this.stack, min: this.min})
        this.stack.push(val);
        this.min.push(Math.min(val, this.min.at(-1) ?? Infinity));
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.min.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        const top = this.stack.at(-1);
        return top;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min.at(-1);
    }
}
