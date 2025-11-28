const { WebSocketServer } = require('ws');

function likesWebSocket(httpServer) {
    const webSocketServer = new WebSocketServer({ server: httpServer });

    webSocketServer.on('connection', (ws) => {
        console.log("webSocket is connected");
    });
}

module.exports = { likesWebSocket };