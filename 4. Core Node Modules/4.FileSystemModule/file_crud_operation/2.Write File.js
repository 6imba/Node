// 2. Writing file:

// // # Asynchronous with callback:
// const fs = require("fs");
// const content = "Some content1";
// fs.writeFile("./file_base/2.Write File.txt", content, (err)=>console.log(err));

// // # Synchronous with try-catch:
// const fs = require("fs");
// const content = "Some content2";
// try{
//     fs.writeFileSync("../file_base/2.Write File.txt", content);
// } catch(err){
//     console.log("Error ==> ",err)
// }

// // // # Promise base:
// const fsp = require("fs/promises");
// const content = "Some content3";
// const writeData = async () => {
//     try{
//         await fsp.writeFile("./file_base/2.Write File.txt", content);
//     } catch(err){
//         console.log("Error ==> ",err)
//     }    
// }
// writeData()