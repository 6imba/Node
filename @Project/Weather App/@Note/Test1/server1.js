const http = require('http');
const fs = require('fs')

const htmlFile = fs.readFileSync("index.html");

const server = http.createServer((req, res) => {
    res.end(htmlFile)
})
server.listen(8000, "127.0.0.1", () => console.log( "Listening to server at http://localhost:8000" ));