// route, url module,
// req.url ==> get the url from the client web browser

// // 1
// const http = require('http');
// const server = http.createServer((req, res) => {
//     if(req.url == '/'){
//         res.end('<h1>Home page.</h1> - Requested url 127.0.0.1:8000, index home page.');
//     }
//     else if(req.url == '/about'){
//         res.end('<h1> About page.</h1> - Requested url 127.0.0.1:8000/about, about home page');
//     }
//     else{
//         res.end('<h1>Request url not defined.</h1> - 404 error:Pagenot found.')
//     }
// })
// server.listen(8000, "127.0.0.1", () => console.log("Server is listening on port 8000"));
// see in browser inspect network



// // 2
// const http = require('http');
// const server = http.createServer((req, res) => {
//     if(req.url == '/'){
//         res.end('<h1>Home page.</h1> - Requested url 127.0.0.1:8000, index home page.');
//     }
//     else if(req.url == '/about'){
//         res.end('<h1> About page.</h1> - Requested url 127.0.0.1:8000/about, about home page');
//     }
//     else{
//         res.writeHead(404)
//         res.end('<h1>Request url not defined.</h1> - 404 error:Pagenot found.')
//     }
// })
// server.listen(8000, "127.0.0.1", () => console.log("Server is listening on port 8000"));



// 3 //content type
const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.end('<h1>Home page.</h1> - Requested url 127.0.0.1:8000, index home page.');
    }
    else if(req.url == '/about'){
        res.end('<h1> About page.</h1> - Requested url 127.0.0.1:8000/about, about home page');
    }
    else{
        res.writeHead(404, {"Content-type": "text/html"});
        res.end('<h1>Request url not defined.</h1> - 404 error:Pagenot found.')
    }
})
server.listen(8000, "127.0.0.1", () => console.log("Server is listening on port 8000"));





// see in browser inspect network
//status code
// deal with client errors ==> add request header ==> res.writeHead(404)
//res.write()
//res.end()





// const http = require('http');
// const port = process.env.PORT || 3000;
// const server = http.createServer((req, res) => {
    //     res.setHeader('Content-Type', 'text/html');
    //     console.log(req.url)
    //     if(req.url == '/'){
        //         res.statusCode = 200;
        //         res.end('<h1>Home page.</h1>');
        //     }
        //     else if(req.url == '/about'){
            //         res.statusCode = 200;
            //         res.end('<h1> About page.</h1>');
            //     }
            //     else{
                //         res.statusCode = 400;
                //         res.end('<h1>Page not found.</h1>')
                //     }
                // })
                // server.listen(port, () => console.log(`Server is listening on port ${port}`));
                // // server crash ~ node mone




