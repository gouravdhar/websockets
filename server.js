const http = require('http');
const WebSocketServer = require("websocket").server

let connection = null

const httpserver = http.createServer((req, res) => {

    console.log("We have received a request")
});



const websocket = new WebSocketServer({
    "httpServer":httpserver
});

httpserver.listen(8080, () => console.log("My server is listening"));

//Receive the upgrade cocnnection request from the client
// I can accept websockets by specific name
websocket.on("request", request=> {
    connection = request.accept(null, request.origin)
    connection.on("open", ()=>console.log("Opened!!"))
    connection.on("close", ()=>console.log("Closed!!"))
    connection.on("message", (message)=>console.log(`Message received ${message.utf8Data}`))
    sendMessageCronJob()
});



function sendMessageCronJob(){
    connection.send(`Message ${Math.random()}`)
    setTimeout(sendMessageCronJob, 5000)
}