const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Node.js Web Server, response!');
})
server.listen(8006, () => console.log("Server is listening on port 8006"));

// see in network tab of browser console.

// res.setHeader('Content-Type', 'text/plain');
// res.setHeader('Content-Type', 'text/html');
// res.setHeader('Content-Type', 'text/json');
// res.setHeader('fruit', 'apple');
