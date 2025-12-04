const { WebSocketServer } = require('ws');

function peerProxy(httpServer) {
    const webSocketServer = new WebSocketServer({ server: httpServer });

    webSocketServer.on('connection', (clientSocket) => {
        console.log("WebSocket connection established");

        clientSocket.on('message', (data) => {
            webSocketServer.clients.forEach((client) => {
                if (client !== clientSocket && client.readyState == WebSocket.OPEN) {
                    client.send(data);
                }
            });
        });
   }); 
}

module.exports = { peerProxy };