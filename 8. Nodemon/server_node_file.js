const http = require("http")

const server = http.createServer((req, res) => {
    res.end(JSON.stringify({name:"Amir Shrestha",email:"simbaamir55@gamil.com"}))
})

server.listen(8006, "127.0.0.1", () => {
    console.log("Server listening to HTTP-Request at port-number 8006.")
})