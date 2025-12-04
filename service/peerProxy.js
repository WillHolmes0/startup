const { WebSocketServer } = require('ws');

function peerProxy(httpServer) {
    const webSocketServer = new WebSocketServer({ server: httpServer });

    webSocketServer.on('connection', (clientSocket) => {
        console.log("New client connected");

        clientSocket.on('message', (data) => sendMessage(webSocketServer, data, clientSocket));
    });

    function sendMessage(webSocketServer, data, clientSocket) {
        webSocketServer.clients.forEach((client) => {
            if (client !== clientSocket && client.readyState == WebSocket.OPEN) {
                client.send(data);
            }
        });
    }
}

module.exports = { peerProxy };