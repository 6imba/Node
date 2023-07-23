// 1. create writeable stream
// 2. write data.
// 3. handle writeable_stream event finish,error.



// console.log("Program Start.");
// const fs = require('fs')
// let data = "Lets write data.";
// const writeableStream = fs.createWriteStream('WriteStreamFile.txt') // 1. create writeable stream
// writeableStream.write(data,'utf8') // 2. write data
// writeableStream.end()
// writeableStream.on('finish', ()=>console.log("Successfully wrote data into file.")) // 3. handle writeable_stream event finish.
// writeableStream.on('error', (err)=>console.log("Runtime-error.")); // 3. handle writeable_stream event error.
// console.log("Program End.");



// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req, res) {
//   // This opens up the writeable stream to `output`
//   var writeStream = fs.createWriteStream('output.txt');
//   // This pipes the POST data to the file
//   req.pipe(writeStream);
//   // After all the data is saved, respond with a simple html form so they can post more data
//   req.on('end', function () {
//     res.writeHead(200, {"content-type":"text/html"});
//     res.end('<form method="POST"><input name="test" /><input type="submit"></form>');
//   });
//   // This is here incase any errors occur
//   writeStream.on('error', function (err) {
//     console.log(err);
//   });
// }).listen(8080);



