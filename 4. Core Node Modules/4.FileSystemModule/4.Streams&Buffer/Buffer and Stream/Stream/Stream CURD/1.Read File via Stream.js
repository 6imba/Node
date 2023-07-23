// 1. create readable stream
// 2. handle readable_stream event:
    // > data: buffer_chunks
    // > drain: 
    // > error: 
    // > end: 
    // > finish: 



// // # Create readable stream:
    // const fs = require('fs')
    // const readableStream = fs.createReadStream('ReadStreamFile.txt') //// 1. create readable stream
    // console.log(readableStream)
    // console.log(typeof(readableStream))
    // console.log(readableStream instanceof Object)



// // # Handle data event: Handle stream buffer_chunk_data:
    // const fs = require('fs')
    // const readableStream = fs.createReadStream('ReadStreamFile.txt')
    // readableStream.on('data', (chunk)=>{ //handle readable_stream data(buffer_chunk) event. (limited size of buffer depends upon platform, here its limit is 65486 bytes)
    //     console.log('Chunk Buffer Data ===> ',chunk,'\n')
    // })



// // #UTF8 encoding buffer_chunk: 
    // const fs = require('fs')
    // const readableStream = fs.createReadStream('ReadStreamFile.txt')
    // readableStream.setEncoding('UTF8');
    // readableStream.on('data', (chunk)=>{ 
    //     console.log('Chunk Encoded Buffer Data ===> ',chunk,'\n ********************************************************')
    // })



// // # set timer using synchronous for-loop to see the stream_of_buffer_chunk: 
// const fs = require('fs')
// const readableStream = fs.createReadStream('ReadStreamFile.txt')
// readableStream.setEncoding('UTF8');
// readableStream.on('data', (chunk)=>{ 
//     console.log('Chunk Encode Buffer Data*')
//     for(let i=0; i<=1000000000; i++){x=2;} // just to set bit timer between each chunk.
//     console.log("Next...")
// })


// # Final streaming of buffer chunk as data:
console.log("Program Started.");
const fs = require('fs')
const readableStream = fs.createReadStream('ReadStreamFile.txt')
readableStream.setEncoding('UTF8');
readableStream.on('data', (chunk)=>{
    console.log('data event: Chunk Encode Buffer Data*')
    console.log("Next...")
})
readableStream.on('end',function() {
    console.log("end event: Streaming ended(No more buffer chunk data to process.");
 });
readableStream.on('error', function(err) {
    console.log("error event: Runtime-Error occured.");
}); 
console.log("Program Ended.");