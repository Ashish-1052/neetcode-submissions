class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const posSpeed = new Array(position.length);
        for (let i = 0; i < posSpeed.length; i++) {
            posSpeed[i] = [position[i], speed[i]];
        }
        posSpeed.sort((a, b) => b[0] - a[0]);
        const q = [];
        for (let el of posSpeed) {
            if (q.length === 0) {
                q.push(el);
            } else {
                const timeEl = (target - el[0]) / el[1];
                const topTime = (target - q.at(-1)[0]) / q.at(-1)[1];
                if (topTime >= timeEl) {
                    continue;
                } else {
                    q.push(el);
                }
            }
        }
        return q.length;
    }
}
