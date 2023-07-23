const http = require("http")

const server = http.createServer((req, res) => {
    // Request Object:
    console.log(req.url)

    // Response Object:
    res.statusCode = 202;
    res.statusMessage = "Good Response";
    res.setHeader('Content-Type', 'text/plain');
    // res.writeHead(202, "Good Response", {"Content-Type":"text/plain"})
    res.end("Hit Server!")
})

server.listen(8006, "127.0.0.1", () => {
    console.log("Server listening to HTTP-Request at port-number 8006.")
})

// it console two time: 1_for_root & 2_for_favicon.

