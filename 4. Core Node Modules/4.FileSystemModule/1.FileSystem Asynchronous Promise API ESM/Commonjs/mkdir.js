
// // # Syntax: fsPromises.mkdir(path[, options])
// // Return: Promise
// // [,options]: <Object> | <integer> ==> {recursive:(default false), mode: (default 0o777)}
// // path: <string> | <Buffer> | <URL>
// const fsp = require('fs/promises')
// const path = require('path')
// const dirname = path.join(__dirname,'Test Dir')
// const returnValue = fsp.mkdir(dirname)
// // console.log(returnValue) //Promise { <pending> }
// // console.log(dirname)
// // console.log(fsp.mkdir) // [AsyncFunction: mkdir]

// const fsp = require('fs/promises')
// const path = require('path')
// const dirname = path.join(__dirname,'Test Dir')
// // fsp.mkdir(dirname,false,'0o777')
// // fsp.mkdir(dirname,true,'0o777')
// // fsp.mkdir(dirname,true)
// // fsp.mkdir(dirname,{recursive:false,mode:0o777})
// fsp.mkdir(dirname,{recursive:true,mode:0o777})



// console.log(0o777)
// console.log(typeof(0o777))
// console.log(0o777 instanceof Number)
// console.log(0o777 instanceof number)



// const fsp = require('fs/promises')
// const path = require('path')
// // const dirname = path.join(__dirname,'Test Dir')
// const dirname = path.join(__dirname,'apple\\Test Dir')
// // const dirname = path.join('Test Dir')



// fsp.mkdir(dirname,true)



// try{
//     fsp.mkdir(dirname,true)
// }catch(err){
//     console.log('My error ==> ', err)
// }
// // why is catch block nor executin?
// // Type of error caught by catch block: EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError
// // here error ENOENT is not caught by catch block.

// try{
//     await fsp.mkdir(dirname,true)
// }catch(err){
//     console.log('My error ==> ', err)
// }

// const fsp = require('fs/promises')
// const path = require('path')
// const dirname = path.join(__dirname,'apple\\Test Dir')
// // const dirname = path.join(__dirname,'Test Dir')
// try{
//     await fsp.mkdir(dirname,true)
// }catch(err){
//     console.log('My error ==> ', err)
// }


// const fsp = require('fs/promises')
// const path = require('path')
// const dirname = path.join(__dirname,'apple\\Test Dir')
// // const dirname = path.join(__dirname,'Test Dir')
// try{
//     (async() => {
//         await fsp.mkdir(dirname,true)
//     })()
// }catch(err){
//     console.log('My error ==> ', err)
// }


// const fsp = require('fs/promises')
// const path = require('path')
// const dirname = path.join(__dirname,'apple\\Test Dir')
// // const dirname = path.join(__dirname,'Test Dir')
// try{
//     const x = async() => {
//         await fsp.mkdir(dirname,true)
//     }
//     x()
// }catch(err){
//     console.log('My error ==> ', err)
// }


// try{
//     const promise = fsp.mkdir(dirname,true)
//     console.log(promise)
// }catch(err){
//     console.log('MyError: ',err)
// }




// const fsp = require('fs/promises')
// try{
//     await fsp.mkdir('C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test')
// }catch(err){
//     console.log(err)
// }