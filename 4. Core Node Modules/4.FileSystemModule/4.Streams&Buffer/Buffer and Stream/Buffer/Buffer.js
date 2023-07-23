// # 1 Read files:
let fs = require('fs');
fs.readFile('../file_base/demo.txt', (err, data) => {
    console.log(data)
    console.log(String(data))
    console.log(typeof(data))
    console.log(data instanceof Array)
    console.log(data instanceof Buffer)
});


// // What is buffer?
// // The Buffer class in Node. js is designed to handle raw binary data.

// // What Are Buffers?
// // The Buffer class in Node. js is designed to handle raw binary data.
// // Each buffer corresponds to some raw memory allocated outside V8.
// // Buffers act somewhat like arrays of integers, but aren't resizable and have a whole bunch of methods specifically for binary data.
// // The integers in a buffer each represent a byte and so are limited to values from 0 to 255 inclusive.
// // When using console.log() to print the Buffer instance, you'll get a chain of values in hexadecimal values.

// // Where You See Buffers:
// // In the wild, buffers are usually seen in the context of binary data coming from streams, such as fs.createReadStream.


// // # Buffer class
// console.log(Buffer)
// let buff1 = new Buffer(10);
// console.log(buff1)
// let buff2 = new Buffer([10,20,30,40,50]);
// console.log(buff2)
