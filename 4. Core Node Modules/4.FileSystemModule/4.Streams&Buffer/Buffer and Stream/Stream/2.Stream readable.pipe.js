
// const fs = require('fs')
// const http = require('http')
// const server = http.createServer();
// server.on('request', (req,res)=>{
//     const streamData = fs.createReadStream('StreamFile.txt') // 1.create readable stream
//     streamData.pipe(res);
// })
// server.listen(3000,"127.0.0.1", ()=> console.log("Server start!"))



const fs = require('fs')
const http = require('http')
const server = http.createServer();
server.on('request', (req,res)=>{
    try{
        const streamData = fs.createReadStream('no.txt') // 1.create readable stream
        streamData.pipe(res);
    }catch(err){
        console.log(err)
        res.write("Error")
    }
})
server.listen(3000,"127.0.0.1", ()=> console.log("Server start!"))


