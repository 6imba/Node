// - Node.JS Asynchronous File System Core Modules

// readFile
// readFileSync
// writeFile
// writeFilesSync
//every opration in fs modules comes in two form synchronous|blocking or asynchronous|non-blocking

// // 1:
// const fs = require('fs');
// console.log(fs)
// console.log(typeof(fs))

// // 1.1
// const fs = require('fs');
// const files1 = fs.readdirSync('./');
// console.log("files1")
// console.log(files1)
// console.log("files2")
// console.log(typeof(files1))
// console.log(files1 instanceof Array)
// console.log(files1[0])
// console.log(typeof(files1[0]))
// // readdirSync gives array of files inside give dir.

// // 1.1
// const fs = require('fs');
// const files11 = fs.readdir('./');
// console.log("files1")
// console.log(files11)
// console.log("files2")

// //1.2
// const fs = require('fs');
// const files2 = fs.readdir('./', (err, files) => {
//     if(err) console.log('Error:', err);
//     else console.log('Result:', files)
// });
// console.log(files2)

// //1.2
// const fs = require('fs');
// const files2 = fs.readdir('.\asaas/.', (err, files) => {
//     if(err) console.log('Error:', err);
//     else console.log('Result:', files)
// });
// console.log(files2)


// //1.2
// const fs = require('fs');
// const files2 = fs.readdir('./', (err, files) => {
//     console.log('Result:', files)
// });
// console.log(files2)
// // built-in asynchronous method(readdir) returns undefine


// //1.2
// const fs = require('fs');
// console.log('files1')
// const files2 = fs.readdir('./', (err, files) => {
//     console.log('Result:', files)
// });
// console.log('files3')


// //1.2
// const fs = require('fs');
// console.log('files1')
// fs.readdir('./', (err, files) => {
//     console.log('Result:', files)
// });
// console.log('files3')


// // 3
// const fs = require('fs');
// const a = fs.readFileSync('3. file.txt')
// console.log('1 ',a)
// console.log('2 ',a.toString())

// console.log("3 Finished reading file !")


// const fs = require('fs');
// let x = fs.writeFile('6.file.txt', 'This1 is a wrote data!', (err)=>{console.log("1 Finished!")})
// // let x = fs.writeFileSync('6.file.txt', '4 This1 is a wrote data!')
// // let x = fs.writeFile('6.file.txt', 'This1 is a wrote data!', ()=>true)
// // let x = fs.writeFile('6.file.txt', 'This1 is a wrote data!', ()=>console.log("Successfully wrote message!"))
// console.log('5 Finish writing file!')
// console.log(x)



// // 5
// const fs = require('fs');
// fs.readFile('6.file.txt', 'utf8', (err, data)=>{console.log(err, data)})
// console.log('Finish reading file!')



// // 6:
// const fs = require('fs');
// fs.readFile('6.file.txt', 'utf8', (err, data)=>{console.log('Error:', err, '\nData:', data)})
// console.log('Finish reading file!')



// // 7:
// // running single thread, non-blocking IO module, synchronous and asynchronous, not delay but deffer, intensional block-> readfilesync, callback computation, 
// const fs = require('fs');
// const x = fs.readFile('6.file.txt', 'utf8', (err, data)=>{console.log('1', err, data)})
// console.log('2',x)
// console.log('3 Finish reading file!')



// // 8:
// const fs = require('fs');
// fs.readFile('6.file.txt', 'utf8', (err, data) => console.log(err, data));
// fs.readFileSync('6.file.txt', 'utf8')



// // 9:
// const fs = require('fs');
// fs.readFileSync('6.file.txt', 'utf8')
// console.log('Finish reading file!')


// // 10: readFileSync:
// const fs = require('fs');
// const j = fs.readFileSync('6.file.txt', 'utf8')
// console.log('1', j)
// console.log('2 Finish reading file!')



// // 11 readFile:
// const fs = require('fs');
// const k = fs.readFile('6.file.txt', 'utf8', (err, data)=>{console.log('1', err, data)})
// console.log('2', k)
// console.log('3 Finish reading file!')

// // readFileSync return data but not execute code where as readFile returns undefines but execute code
// fs.readFile( filename, encoding, callback_function ) vs fs.readFileSync( path, options )


// 12:
// const fs = require('fs');
// fs.readFile('6.file.txt', 'utf8', (err, data) => console.log(data));


// // 13:
// const fs = require('fs');
// // const z = fs.readFileSync('6.file.txt');
// // const z = fs.readFileSync('6.file.txt', 'utf8');
// const z = fs.readFileSync('6.file.txt');
// console.log(z)



// // 16 writeFile:
// const fs = require('fs');
// fs.writeFile('6.file.txt', 'naya kura!', () => console.log('Wrote into file!'));


// // 17 writeFile
// const d = fs.writeFile('6.file.txt', 'naya kura!', () => console.log('Wrote into file!'));
// console.log(d)
// console.log('hihihihi')


// // // 17 writeFileSync
// const e = fs.writeFileSync('6.file.txt', 'naya kura version 2!', () => console.log('Wrote into file!'));
// console.log(e)
// console.log('hihihihi')

// ---------------------------------------------------------------------------------------------------------------------------------------------------------

// # Reference:
//https://www.geeksforgeeks.org/node-js-fs-readfile-method/
//https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/


// # Synchronous File handling:
// fs.writeFileSync()
// fs.appendFileSync()
// fs.readFileSync()
// fs.mkdirSync()
// fs.renameSync()
// fs.unlinkSync()
// fs.rmdirSync()

// sysnchronous version & buffer data & read file & encode.
// buffer datatype in nodejs that stores binary data when reading from a file or receiving packets from networks.
// stringify buffere data.
// encoding vs stringify

// ---------------------------------------------------------------------------------------------------------------------------------------------------------