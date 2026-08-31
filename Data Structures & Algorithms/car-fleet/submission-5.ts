class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * posx < posy, timex > timey -> both intersect
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const stack = [];
        const posTime = [];
        for (let i = 0; i < position.length; i++) {
            posTime.push([position[i], (target - position[i]) / speed[i]]);
        }
        posTime.sort((a, b) => b[0] - a[0]);
        for (let i = 0; i < position.length; i++) {
            stack.push(posTime[i]);
            if (stack.length >= 2 && stack.at(-1)[1] <= stack.at(-2)[1]) {
                stack.pop();
            }
        }
        return stack.length;
    }
}
