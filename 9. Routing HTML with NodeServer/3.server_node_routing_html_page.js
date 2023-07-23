const http = require("http")
const fs = require("fs")
const server = http.createServer((req, res) => {
    res.writeHead(203, "OKOKOK", {'Content-Type':'text/html'})
    if(req.url === "/"){
        fs.readFile("./HtmlPages/home.html", (error, data)=> {
            res.end(data)
        })
    }else if(req.url === "/about"){
        fs.readFile("./HtmlPages/about.html", (error, data)=> {
            res.end(data)
        })
    }else if(req.url === "/contact"){
        fs.readFile("./HtmlPages/contact.html", (error, data)=> {
            res.end(data)
        })
    }else{
        res.end("404 Page not found.")
    }
})

server.listen(8006, "127.0.0.1", () => {
    console.log("Server listening to HTTP-Request at port-number 8006.")
})

// Try url:
//     - http://localhost:8006/
//     - http://localhost:8006/about
//     - http://localhost:8006/contact