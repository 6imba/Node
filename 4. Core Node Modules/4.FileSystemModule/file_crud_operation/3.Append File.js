// 2. Appending file:

// // # Asynchronous:
// const fs = require("fs");
// const content = "Some content1";
// fs.writeFile("../file_base/3.Append File.txt", content, {flag: 'a+'}, (err)=>console.log(err));

// // # Synchronous:
// const fs = require("fs");
// const content = "Some content2";
// try{
//     fs.writeFileSync("../file_base/3.Append File.txt", content, {flag: 'a+'});
// } catch(err){
//     console.log(err)
// }

// // // # Promise base:
// const fsp = require("fs/promises");
// const content = "Some content3";
// const writeData = async () => {
//     try{
//         await fsp.writeFile("../file_base/3.Append File.txt", content, {flag: 'a+'});
//     } catch(err){
//         console.log(err)
//     }    
// }
// writeData()

// // fs.appendFile:
// const fs = require("fs");
// const content = "Some content1";
// fs.appendFile("../file_base/3.Append File.txt", content, (err)=>console.log(err));



const fs = require("fs");
const content = "Some content0101010";
try{
    fs.appendFileSync("../file_base/3.App45end File.txt", content);
}catch(err){
    console.log(err)
}
