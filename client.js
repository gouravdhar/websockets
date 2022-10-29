let ws = new WebSocket("ws://localhost:8080")
ws.send("Hi there")
ws.onmessage = message => console.log(`Message from server ${message.data}`)