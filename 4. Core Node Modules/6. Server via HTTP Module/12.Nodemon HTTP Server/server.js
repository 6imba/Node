import http from 'http'
const server = http.createServer((req,res)=>{
    if(req.url == "/"){ 
        res.end("Hello from HomePage of Node Http Server!")
    }
    else if(req.url == "/about"){
        res.end("I am AboutPage!")
    }
    else{
        res.end(`Page not found!`)
    }
})

server.listen(3000, "127.0.0.1", () => console.log("Listening server request."))