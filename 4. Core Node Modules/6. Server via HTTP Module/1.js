// // # 1
// const NodeHTTPServerModule = require("http") //import Node http module
// console.log(NodeHTTPServerModule)
// console.log(typeof(NodeHTTPServerModule)) //object


// 1: Importing Node http module.
const Node_HTTP_ServerModule = require("http") //import Node http module

// // 2: Create Node HTTP Server.
// const NodeHTTPServer = Node_HTTP_ServerModule.createServer((req, res)=>{})// create/initialize http_web_server using createServer() method of http object/module, which takes a callback as aparameter which also takes two parameter, i,e: request_object & response_object. Here, .createServer() methods returns server_instance.
// // request_object: hold all info about current http request.
// // response_object: hold all info about response to respective http request.
// // console.log(NodeHTTPServer)

// 3: Response to browser when  server is initialize.
const NodeHTTPServer = Node_HTTP_ServerModule.createServer((req, res)=>{
    res.end("Hello from Node Http Server!") // if any request gets hits end() always returns. Gets print in Brwoser HTML_DOM.
})

// // 4: Server listening to HTTP-Request.
// // 4.1:
// NodeHTTPServer.listen() //first listen method always listen to the incomming http-request.
// // 4.2:
// NodeHTTPServer.listen(8006, "127.0.0.1") //You can also specify the port_number where you want your incomming http-request to be listened && host name=> local_host.
// // 4.3:
// NodeHTTPServer.listen(8006, "127.0.0.1", () => {
//     console.log("Server listening to HTTP-Request at port-number 8006.") //Gets print in Server_Console.
// }) // we can also console message whenever we lister to server using optional callback.



// Go to http://localhost:8006/ in browser.

// server.listen(port, hostname, backlog, callback);
