// built a HTTP Server by own using node built-in http module.
// http.createServer(callback with req and res parameter), is method use to create server.
// req paramater is an object that is used to get information about the current HTTP request.
    // e.g: url, request header, and data.
// res paramater is an response object that is used to send response for a current request.
// When request to server send atleast one response ==> res.end('Node.js Web Server, response!');
// res.end => sends response to the web browser.
// But how will node.js web server know if there is any request made on server.
// Here comes solution we need to listen to request, we have server-method to listen request==> server.listen(port, "127.0.0.1", callback);


// 1
const http = require('http');
const server = http.createServer((req, res) => {
    res.write('Node.js Web Server, response 1!');
    res.end('Node.js Web Server, response 2!');
    res.write('Node.js Web Server, response 3!');
})
server.listen(8000, "127.0.0.1", () => console.log( "Listening to port no 8000" ));
// see response in web browser ==> http://127.0.0.1:8000/
// output in browser ==> res.end('Node.js Web Server, response!');
// output in console ==> console.log( "Listening to port no 8000" )



// 2
// const http = require('http');
// const port = process.env.PORT || 3000;
// const server = http.createServer((req, res) => {
//     // console.log(req)
//     console.log(req.url)
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('Node.js Web Server, response!'); //at least one response.
// })
// server.listen(port, () => console.log(`Server is listening on port ${port}`));
//http://localhost:3000/


