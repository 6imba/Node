// # 1 Read files:
let fs = require('fs');
    
    // // # Synchronous Syntax:
    //     // fs.readFile('file path','encoding')
    //     // return data
        
    // // fs.readFile('demo.html', (err, data) =>console.log(data));
    // // fs.readFile('demo.html','utf8', (err, data) =>console.log(data));
    // let data1 = fs.readFileSync('./file_base/demo.html','utf8');
    // console.log(data1)
    // let data2 = fs.readFileSync('./file_base/demo.txt','utf8');
    // console.log(data2)
    // let data3 = fs.readFileSync('./file_base/demo.json','utf8');
    // console.log(data3)
    // let data4 = fs.readFileSync('./file_base/demo.csv','utf8');
    // console.log(data4)
    


    // # Asynchronous Syntax:
        // fs.readFile('file path','encoding', callback);
        // return undefine
        // consume data in callback
        
    // fs.readFile('demo.html', (err, data) =>console.log(data));

    // fs.readFile('../file_base/demo.html','utf8', (err, data) => {
    //     if(err){
    //         console.log(err)
    //     }else{
    //         console.log(data)
    //     }
    // });

    // fs.readFile('./file_base/demo.txt','utf8', (err, data) =>console.log(data));
    // fs.readFile('./file_base/demo.json','utf8', (err, data) =>console.log(data));
    // fs.readFile('./file_base/demo.csv','utf8', (err, data) =>console.log(data));


    // // let data5 = fs.readFileSync('../file_base/demo.csv','utf16');
    // // console.log(data5)
    // // let data6 = fs.readFileSync('../file_base/demo.csv','utf32');
    // // console.log(data6)



    // // # Promise-based Syntax:
    //     // fs.readFile('file path','encoding')
    //     // return data
    
    // const fsp = require('fs/promises');
    // const getData1 = async () => {
    //     const data = await fsp.readFile('./file_base/demo.html','utf8');
    //     console.log(data)
    // }
    // getData1() //execute function
    // console.log(getData1()) //returned promise object
    // console.log(getData1) //outputs function name

    // const fsp = require('fs/promises');
    // const getData2 = async (fileName) => {
    //     const data = await fsp.readFile(fileName,'utf8');
    //     console.log(data)
    // }
    // getData2('./file_base/demo.html')
    // getData2('./file_base/demo.json')
    // getData2('./file_base/demo.txt')
    // getData2('./file_base/demo.csv')

    // const fsp = require('fs/promises');
    // const getData2 = async (fileName) => {
    //     try{
    //         const data = await fsp.readFile(fileName,'utf8');
    //         console.log(data)
    //     }catch(err){
    //         console.log("Error ==> " + err)
    //     }
    // }
    // getData2('../file_base/demo.html')
    // getData2('../file_base/demo.json')
    // getData2('../file_base/demo.txt')
    // getData2('../file_base/demo.csv')




// // Q. what is buffer data?
// // Q. what is utf8 encoding?

    // let data1 = fs.readFileSync('./file_base/demo.html'); // read file and return buffer data
    // console.log(data1)

    // let data2 = fs.readFileSync('./file_base/demo.html', 'utf8'); // read file and return utf8-encoded buffer data.
    // console.log(data2)







    
    // // # Synchronous:
    // const fs = require('fs')
    // const http = require('http')
    // const server = http.createServer();
    // console.log("Server-side backend programmed executed !!!")
    // server.on('request', (req,res)=>{ // request on server is send when you hit http://127.0.0.1:3000/ on your browser.
    //     console.log("Request detected on server ****************** ")
    //     const data = fs.readFileSync('StreamFile.txt')
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
    //     fs.readFile('StreamFile.txt', 'utf8', (err,data)=>{ //utf8 encode data.
    //         console.log(data)
    //         console.log(typeof(data))
    //         res.end(data)
    //     })

    // })
    // server.listen(3000,"127.0.0.1", ()=> console.log("Server Started/Hosted ********************* "))
