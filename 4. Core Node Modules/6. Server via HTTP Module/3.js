const Node_HTTP_ServerModule = require("http")
const NodeHTTPServer = Node_HTTP_ServerModule.createServer((req, res)=>{
    // console.log(req)
    console.log(req.url) // http://localhost:8006/home or http://localhost:8006/contact
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("Hello from Node Http Server!")
})
NodeHTTPServer.listen(8006, "127.0.0.1", () => {
    console.log("Server listening to HTTP-Request at port-number 8006.")
})

