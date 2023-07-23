const Node_HTTP_ServerModule = require("http") //import Node http module
const NodeHTTPServer = Node_HTTP_ServerModule.createServer((req, res)=>{ // create/initialize Node_http_web_server
    res.end("Hello from Node Http Server!") // Response to Browser's HTML_DOM, when server is initialize. If any request gets hits end() always returns.
})
NodeHTTPServer.listen(3000, "127.0.0.1", () => { //Server listening to incomming HTTP-Request  http-request at port_number:8006 & host by local_host:127.0.0.1.(127.0.0.1:8006)
    console.log("Server listening to HTTP-Request at port-number 8006.") // we can also console message whenever we listen to server using optional callback.
})