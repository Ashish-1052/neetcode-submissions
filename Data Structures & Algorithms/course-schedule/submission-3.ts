class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const preMap = new Map();
        for (let [crs, pre] of prerequisites) {
            const newPre = preMap.get(crs) ?? [];
            newPre.push(pre);
            preMap.set(crs, newPre);
        }

        const visiting = new Set();

        function dfs(crs: number) {
            if (visiting.has(crs)) {
                return false;
            }
            if (!preMap.has(crs) || preMap.get(crs).length === 0) {
                return true;
            }
            visiting.add(crs);
            for (let pre of preMap.get(crs)) {
                if (!dfs(pre)) {
                    return false;
                }
            }
            visiting.delete(crs);
            preMap.set(crs, []);
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) {
                return false;
            }
        }

        return true;
    }
}
