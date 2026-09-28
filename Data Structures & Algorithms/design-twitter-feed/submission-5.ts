interface UserDetails {
    followers: Set<number>;
    followees: Set<number>;
    posts: [number, number][]; // id, time; 
}

class Twitter {
    private map: Map<number, UserDetails>
    private time: number
    constructor() {
        this.map = new Map();
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId: number, tweetId: number): void {
        let userDetails: UserDetails;
        if (this.map.has(userId)) {
            userDetails = this.map.get(userId);
        } else {
            userDetails = { followers: new Set(), followees: new Set(), posts: [] }
        }
        const userPosts = userDetails.posts;
        userPosts.push([tweetId, this.time++]);
        this.map.set(userId, userDetails);

    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId: number): number[] {
        let userDetails: UserDetails;
        if (this.map.has(userId)) {
            userDetails = this.map.get(userId);
        } else {
            userDetails = { followers: new Set(), followees: new Set(), posts: [] }
        }
        const followees = userDetails.followees;
        const posts = [...userDetails.posts];
        for (let el of followees) {
            posts.push(...this.map.get(el).posts);
        }
        posts.sort((a, b) => b[1] - a[1]).slice(0, 10);
        return posts.slice(0, 10).map(i => i[0]);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId: number, followeeId: number): void {
        let userDetailsR: UserDetails;
        let userDetailsE: UserDetails;
        if (this.map.has(followerId)) {
            userDetailsR = this.map.get(followerId);
        } else {
            userDetailsR = { followers: new Set(), followees: new Set(), posts: [] }
        }
        if (this.map.has(followeeId)) {
            userDetailsE = this.map.get(followeeId);
        } else {
            userDetailsE = { followers: new Set(), followees: new Set(), posts: [] }
        }
        userDetailsR.followees.add(followeeId);
        userDetailsE.followers.add(followerId);
        this.map.set(followerId, userDetailsR);
        this.map.set(followeeId, userDetailsE);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId: number, followeeId: number): void {
        let userDetailsR: UserDetails;
        let userDetailsE: UserDetails;
        if (this.map.has(followerId)) {
            userDetailsR = this.map.get(followerId);
        } else {
            userDetailsR = { followers: new Set(), followees: new Set(), posts: [] }
        }
        if (this.map.has(followeeId)) {
            userDetailsE = this.map.get(followeeId);
        } else {
            userDetailsE = { followers: new Set(), followees: new Set(), posts: [] }
        }
        userDetailsR.followees.delete(followeeId);
        userDetailsE.followers.delete(followerId);
        this.map.set(followerId, userDetailsR);
        this.map.set(followeeId, userDetailsE);
    }
}
