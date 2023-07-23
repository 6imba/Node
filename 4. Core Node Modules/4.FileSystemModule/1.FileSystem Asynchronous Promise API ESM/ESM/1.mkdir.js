// import fs from 'fs'
// console.log(fs)

// import fs from 'fs'
// try{
//     await fs.mkdir(__dirname,'test')
// }catch(err){
//     console.log(err)
// }

// import path from 'path';
// import {fileURLToPath} from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.join(path.dirname(__filename),'Test dir');
// import fs from 'fs'
// try{
//     await fs.mkdir(__dirname,'test')
// }catch(err){
//     console.log(err)
// }

// import fs from 'fs'
// try{
//     await fs.mkdir('C:\Users\DELL\Desktop\NodeJS\4. Core Node Modules\3.FileSystemModule\FileSystem Promise API\ESM\test')
// }catch(err){
//     console.log(err)
// }



// import fs from 'fs'
// try{
//     await fs.mkdir('C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test')
// }catch(err){
//     console.log(err)
// }




// import fs from 'fs/promises'
// try{
//     await fs.mkdir('C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test')
// }catch(err){
//     console.log(err)
// }


// import fs from 'fs/promises'
// const dirname = 'C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test'
// try{
//     await fs.mkdir(dirname, {recursive:true})
// }catch(err){
//     console.log(err)
// }



// see what await does:
// const func1 = () => {
//     for(let i=0; i<=1000000000; i++){ var x=1; }
//     for(let i=0; i<=1000000000; i++){ var x=1; }
// }
// try{
//     await func1()
//     console.log("Hi")
// }catch(err){
//     console.log("Bye")
// }



// -------------------------------------------------------------------------------------------------------------------------------------------------

// import fs from 'fs/promises'
// const dirname = 'C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test'
// try{
//     await fs.mkdir(dirname, {recursive:true})
//     // await fs.mkdir(dirname, 0o777)
//     // await fs.mkdir(dirname, '0o777') //The argument 'mode' must be a 32-bit unsigned integer or an octal string. Received '0o777'
//     // await fs.mkdir(dirname, 123)
// }catch(err){
//     console.log(err)
// }

// # Syntax:
// fsPromises.mkdir(path[, options])
// path <string> | <Buffer> | <URL>
// options <Object> | <integer>
// recursive <boolean> Default: false
// mode <string> | <integer> Not supported on Windows. Default: 0o777.
// Returns: <Promise> Upon success, fulfills with undefined if recursive is false, or the first directory path created if recursive is true.

// fs.mkdir(dirname) ==> fsPromises.mkdir(path<String>)
// fs.mkdir(dirname, {recursive:true}) ==> fsPromises.mkdir(path[, options<Object>:recursion<boolean>])
// fs.mkdir(dirname, {recursive:true, mode:'0o777'}) ==> fsPromises.mkdir(path[, options<Object>:recursion<Boolean>&mode<string>])
// fs.mkdir(dirname, {recursive:true, mode:0o777}) ==> fsPromises.mkdir(path[, options<Object>:recursion<Boolean>&mode<hexadecimal>])
// fs.mkdir(dirname, {recursive:true, mode:1234}) ==> fsPromises.mkdir(path[, options<Object>:recursion<Boolean>&mode<integer>])
// fs.mkdir(dirname, {recursive:true, mode:1234})
// fs.mkdir(dirname, 123)  ==> fsPromises.mkdir(path[, options<integer>])

// Reference: https://www.geeksforgeeks.org/node-js-fspromises-mkdir-method/

// -------------------------------------------------------------------------------------------------------------------------------------------------








// import fs from 'fs/promises'
// const dirname = 'C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test'
// try{
//     fs.mkdir(dirname)
// }catch(err){
//     console.log("My error ==========> ",err)
// }

// // - catch block is not catching the fsp.mkdir error.

// import fs from 'fs/promises'
// const dirname = 'C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test'
// try{
//     await fs.mkdir(dirname)
// }catch(err){
//     console.log("My error ==========> ",err)
// }



import fs from 'fs/promises'
const dirname = 'C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test'
try{
    await fs.mkdir(dirname)
    console.log("New directory created!")
}catch(err){
    console.log("Error occur ==========> ",err)
}



// import fs from 'fs/promises'
// const dirname = 'C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test'
// try{
//     await fs.mkdir(dirname, {recursive:true})
//     console.log("New directory created!")
// }catch(err){
//     console.log("Error occur ==========> ",err)
// }