class TimeMap {
    private keyStore: Map<string, [number, string][]>;
    private keyTime: Map<string, number>;
    constructor() {
        this.keyStore = new Map(); // [key: map<time, value>];
        // this.keyTime = new Map(); // [key, latestTime];
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        const currentArr = this.keyStore.get(key) ?? [];
        currentArr.push([timestamp, value]);
        this.keyStore.set(key, currentArr);
        // this.keyTime.set(key, timestamp);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const allVal = this.keyStore.get(key) ?? [];
        let l = 0;
        let r = allVal.length - 1;
        let target: number;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (allVal[mid][0] <= timestamp) {
                target = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        if (target !== undefined) {
            return allVal[target][1];
        } else return '';
    }
}
