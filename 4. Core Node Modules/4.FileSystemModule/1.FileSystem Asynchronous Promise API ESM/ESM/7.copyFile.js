import { copyFile } from 'fs'
import fsp from 'fs/promises'

// // #1: fsp.copyFile return promise
// const data = fsp.copyFile('./test/myFile1.txt','./7.copyFile.txt')
// console.log(data)

// // #2: await fsp.copyFile return processed(fullfill/reject) promise data/error
// try{
    //     const data = await fsp.copyFile('./test/myFile1.txt','./7.copyFile.txt')
    //     console.log(data)
    // }catch(err){
        //     console.log('MyError ===> ',err)
        // }
        
// // // #3: copyFileData takes time so make it asynchronous
// const copyFileData = async () => {    
//     try{
//         const data = await fsp.copyFile('./test/myFile1.txt','./7.copyFile.txt')
//         console.log(data)
//     }catch(err){
//         console.log('MyError ===> ',err)
//     }
// }
// copyFileData()

// # fsPromise.copyFile()
const copyFileData = async () => {    
    try{
        await fsp.copyFile('./test/myssFile1.txt','./7.copyFile.txt')
        console.log("File content copied.")
    }catch(err){
        console.log("Failed to copy file content.\n", err)
    }
}
copyFileData()