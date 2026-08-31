class MinStack {
    private stack: number[] = [];
    private minStack: number[] = [];
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        if (this.minStack.length > 0) {
            this.minStack.push(Math.min(this.minStack.at(-1), val));
        } else {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.minStack.pop()
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack.at(-1);
    }
}
