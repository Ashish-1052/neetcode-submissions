class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * posx < posy, timex > timey -> both intersect
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const positionSpeed = position.map((p, i) => [p, speed[i]]);
        positionSpeed.sort((a, b) => b[0] - a[0]);
        const stack = [];
        for (let i = 0; i < positionSpeed.length; i++) {
            stack.push((target - positionSpeed[i][0]) / positionSpeed[i][1]);
            if (stack.length >= 2 && stack.at(-2) >= stack.at(-1)) {
                stack.pop();
            }
        }
        return stack.length;
    }
}
