const http = require("http")

const server = http.createServer((req, res) => {
    // // Request Object Debug:
    // console.log(req)
    // console.log(req.url)
    // console.log(req.method)
    // console.log(typeof(req))
    // console.log(typeof(req.url))
    
    // Response Object Debug:
    // console.log(res)
    // console.log(typeof(res))
    // console.log(res.data)
    console.log(res.destroyed)
    console.log("hi")
    res.end("Hit Server!")
})

server.listen(8006, "127.0.0.1", () => {
    console.log("Server listening to HTTP-Request at port-number 8006.")
})

// Q. Why is my node server excuting two time. ==> PS C:\Users\DELL\Desktop\1. NodeJS\5. Node HTTP Module\HTTP Server> node .\8.http_server_RequestObject.js
    // it console two time: 1_for_root & 2_for_favicon.

