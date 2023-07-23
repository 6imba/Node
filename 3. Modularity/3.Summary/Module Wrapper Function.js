// module wrapper function ==> (fucntio(){ })


console.log(exports) // {}
console.log(require) // [Function: require] {}
console.log(module) // Module {}
console.log(__filename) //Module Wrapper Function.js
console.log(__dirname) //C:\Users\DELL\Desktop\NodeJS\3. Modularity


// // By default every module/file 's code is wrapped inside a module wrapper function in node by default:
// (function (exports, require, module, __filename, __dirname) {
//     console.log(exports) // {}
//     console.log(require) // [Function: require] {}
//     console.log(module) // Module {}
//     console.log(__filename) //Module Wrapper Function.js
//     console.log(__dirname) //C:\Users\DELL\Desktop\NodeJS\3. Modularity
//   });



// console.log(module)
// console.log(typeof(module))
// console.log(exports)
// console.log(typeof(exports))

// module.exports = "Hi string";
// console.log(module) // => see the export property

// console.log(module.exports) // => see the export property
// console.log(exports) // => see the export property
// module.exports = "Hi string";
// console.log(exports) // => see the export property
// console.log(module.exports) // => see the export property

// console.log(exports)
// console.log(require)
// console.log(module)
// console.log(__filename)
// console.log(__dirname)

// // 6 //module wrapper function
// console.log(exports, require, module, __filename, __dirname)

