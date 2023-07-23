const http = require("http")

const server = http.createServer((req, res) => {
    res.writeHead(203, "OKOKOK", {'Content-Type':'text/html'})
    res.end("<h1>My HTML Heading 1</h1>")
})

server.listen(8006, "127.0.0.1", () => {
    console.log("Server listening to HTTP-Request at port-number 8006.")
})