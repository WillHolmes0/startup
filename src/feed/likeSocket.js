

class LikeSocket {

    constructor(updateStoryLikes) {
        const port = window.location.port;
        const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
        const hostname = window.location.hostname;
        this.socket = new WebSocket(`${protocol}://${hostname}:${port}/ws`);
        this.socket.onopen = () => {
            console.log("WebSocket connection established");
        }
        
        this.socket.onmessage = async function(message) {
            const data = JSON.parse(await message.data.text());
            updateStoryLikes(data.storyID, data.newLikeCount);
        }
    }

    broadcastLike(storyID, newLikeCount) {
        this.socket.send(JSON.stringify(new LikeUpdate(storyID, newLikeCount)));
    }
}

class LikeUpdate {
    constructor(storyID, newLikeCount) {
        this.storyID = storyID;
        this.newLikeCount = newLikeCount;
    }   
}

export { LikeSocket };