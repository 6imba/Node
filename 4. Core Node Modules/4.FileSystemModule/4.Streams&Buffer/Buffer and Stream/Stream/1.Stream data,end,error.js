// # Old fashion(Downloading):

    // // # Synchronous:
    // const fs = require('fs')
    // const http = require('http')
    // const server = http.createServer();
    // console.log("Server-side backend programmed executed !!!")
    // server.on('request', (req,res)=>{ // request on server is send when you hit http://127.0.0.1:3000/ on your browser.
    //     console.log("Request detected on server ****************** ")
    //     const data = fs.readFileSync('StreamFile.txt') // read whole file at once into single buffer_chunk.
    //     console.log(data)
    //     console.log(typeof(data))
    //     console.log(data.toString())
    //     res.end(data)
    // })
    // server.listen(3000,"127.0.0.1", ()=> console.log("Server Started/Hosted ********************* "))



    // // # Asynchronous:
    // const fs = require('fs')
    // const http = require('http')
    // const server = http.createServer();
    // console.log("Server-side backend programmed executed !!!")
    // server.on('request', (req,res)=>{ // request on server is send when you hit http://127.0.0.1:3000/ on your browser.
    //     console.log("Request detected on server ****************** ")
    //     // fs.readFile('StreamFile.txt', (err,data)=>{ // without encoded data in console, but browser automatically encode the buffer data
    //     //     console.log(data)
    //     //     console.log(typeof(data))
    //     //     res.end(data)
    //     // })
    //     fs.readFile('StreamFile.txt', 'utf8', (err,data)=>{ //utf8 encode data. // read whole file at once into single buffer_chunk.
    //         console.log(data)
    //         console.log(typeof(data))
    //         res.end(data)
    //     })

    // })
    // server.listen(3000,"127.0.0.1", ()=> console.log("Server Started/Hosted ********************* "))


        
        
// # Optimize fashion(Streaming):
// console.log(Stream)
console.log("Server-side backend programmed executed !!!")
const fs = require('fs')
const http = require('http')
const server = http.createServer();
server.on('request', (req,res)=>{
    console.log("Request detected on server ****************** ")

    const streamData = fs.createReadStream('StreamFile.txt') // 1.create readable stream // read whole file into multiple buffer_chunk as stream.
    // const streamData = fs.createReadStream('Steam.txt') // for error event.
    // 2.handle stream events: data,end and error.
    streamData.on('data', (chunk)=>{ //here data event gets fire when there data avialable to read.
        res.write(chunk) /// res.write append data into screen.
        console.log(chunk) //here chunk is a streamed_buffer_data. //browser automatically encode buffer data to screen.
        console.log("Reading a streamed_buffer_chunk_data")
    })
    streamData.on("end", ()=>{ //here end event gets fire when there is no more data to read.
        console.log("No more stream_buffer_chunk data left to process.")
        res.end("<h1>Hello World!</h1>"); // res.end get print at the end into screen.
    })
    streamData.on("error", ()=>{
        console.log("Error occured!!!")
        res.end("file one found!");
    })
})
server.listen(3000,"127.0.0.1", ()=> console.log("Server Started/Hosted ********************* "))


