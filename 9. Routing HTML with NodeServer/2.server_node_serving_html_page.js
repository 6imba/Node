const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    fs.readFile("./HtmlPages/home.html", (err, home_page) => {
        if(err) throw err;
        res.end(home_page)
    })
})

server.listen(8006, "127.0.0.1", () => {
    console.log("Server listening to HTTP-Request at port-number 8006.")
})