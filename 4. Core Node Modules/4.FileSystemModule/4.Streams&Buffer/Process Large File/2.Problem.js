// const fs = require('fs')
// const data = fs.readFileSync('2.csv')
// console.log(data)

// const fs = require('fs')
// const data = fs.readFileSync('2.csv', 'utf8')
// console.log(data)



// // Size of file:
// var fs = require("fs"); // Load the filesystem module
// var stats = fs.statSync("2.csv")
// // var stats = fs.statSync("2.1.txt")
// var fileSizeInBytes = stats.size;
// var fileSizeInMegabytes = fileSizeInBytes / (1024*1024); // Convert the file size to megabytes (optional) 8bit=1024bytes=1028kilibytes=1028megabytes.
// console.log(fileSizeInMegabytes)



// const arr2 = [1,2,3,4,5]
// console.log(arr2)
// console.log(arr2.toString())
// console.log(arr2.join("\n"))



// const arr1= []
// var fs = require("fs"); // Load the filesystem module
// // for(let i=0;i<=1e9;i++){
// for(let i=0;i<=1e8;i++){
//     arr1.push(i)
// }
// console.log(arr1)
// // console.log(arr1.toString())
// console.log(arr1.join())
// // fs.writeFileSync("2.1.txt", "Apple")
// // fs.writeFileSync("2.1.txt", arr1.join('\n'))

// // RangeError: Invalid string length
// // Fatal JavaScript invalid size error 169220804



// const arr1= []
// var fs = require("fs"); // Load the filesystem module
// for(let i=0;i<=1e7;i++){
//     arr1.push(i)
// }
// fs.writeFileSync("2.txt", arr1.join('\n'))



// const arr1= []
// var fs = require("fs"); // Load the filesystem module
// for(let i=0;i<=1e8;i++){
//     arr1.push(i)
// }
// fs.writeFileSync("2.txt", arr1.join('\n'))
// // The maximum allowed array length depends on the platform, browser and browser version. In case of node_16.15.1 ==> 65,536 bytes
// // app runs out of the memory.



// const arr1= []
// var fs = require("fs");
// // for(let i=0;i<=1e7;i++){
// for(let i=0;i<=1e8;i++){
//     arr1.push(i)
// }
// console.log(arr1.join('\n').length)
// // const str1 = arr1.join('\n') //RangeError: Invalid string length
// // console.log(str1)