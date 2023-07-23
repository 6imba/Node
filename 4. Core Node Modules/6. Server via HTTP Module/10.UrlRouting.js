const http = require("http") //import Node http module

const server = http.createServer((req, res)=>{ // create/initialize Node_http_web_server
    console.log(req.url)
    if(req.url == "/"){ // open browser and goto/try http://localhost:8006/ in url_bar.
        res.end("Hello from HomePage of Node Http Server!")
    }
    else if(req.url != "/favicon.ico"){
        res.end("Hello from HomePage of Node Http Server!")
    }
    else if(req.url == "/about"){ // open browser and goto/try http://localhost:8006/about in url_bar.
        res.end("Hello from AboutPage of Node Http Server!")
    }
    else if(req.url == "/contact"){ // open browser and goto/try http://localhost:8006/contact in url_bar.
        res.end("Hello from ContactPage of Node Http Server!")
    }
    else{
        // res.writeHead(404) // Browser Console error.
        res.end(`Hello from NoPage${req.url} of Node Http Server!`)
    }
    // else{
    //     // res.writeHead(404) // Browser Console tab error.
    //     // res.writeHead(404, {"Content-type": "text/html"}) // Browser Network tab Header.
    //     res.end(`<h1>Hello from NoPage${req.url} of Node Http Server!</h1>`)
    // }
})

server.listen(8006, "127.0.0.1", () => { //Server listening to incomming HTTP-Request  http-request at port_number:8006 & host by local_host:127.0.0.1.(127.0.0.1:8006)
    console.log("Server listening to HTTP-Request at port-number 8006.")
})