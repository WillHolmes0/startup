

class likeSocket {

    constructor() {
        const port = window.location.port;
        const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
        const hostname = window.location.hostname;
        const socket = new WebSocket(`${protocol}://${hostname}:${port}`);
        
        socket.onmessage = function(message) {
            console.log("Received message:", message.data);
        }
    }

    broadcastlike(storyID, newLikeCount) {
        socket.send(JSON.stringify(new likeUpdate(storyID, newLikeCount)));
    }
}

class likeUpdate {
    constructor(storyID, newLikeCount) {
        this.storyID = storyID;
        this.newLikeCount = newLikeCount;
    }   
}