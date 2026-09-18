class TimeMap {
    private keyStore: Map<string, [string, number][]>
    constructor() {
        this.keyStore = new Map(); // [key, [value, time][]]
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        const arr = this.keyStore.get(key) ?? [];
        arr.push([value, timestamp]);
        this.keyStore.set(key, arr);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        if (!this.keyStore.has(key)) return "";
        const arr = this.keyStore.get(key);
        let left = 0;
        let right = arr.length - 1;
        let target: number;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid][1] <= timestamp) {
                target = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return target !== undefined ? arr[target][0] : "";
    }
}
