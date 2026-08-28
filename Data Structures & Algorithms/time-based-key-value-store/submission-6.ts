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
        for (let i = allVal.length - 1; i >= 0; i--) {
            if (allVal[i][0] <= timestamp) {
                return allVal[i][1];
            }
        }
        return "";
    }
}
