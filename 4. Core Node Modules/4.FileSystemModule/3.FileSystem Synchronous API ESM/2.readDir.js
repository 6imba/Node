// Return: <string[]> | <Buffer[]> | <fs.Dirent[]>

import fs from 'fs'

// const files = fs.readdirSync('C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\3.FileSystem Synchronous API ESM')
// console.log(files)

// const files = fs.readdirSync('./')
// console.log(files)

// try{
//     const files = fs.readdirSync('./noDir')
//     console.log(files)
// }catch(err){
//     console.log("Our error ===> ",err)
// }

// try{
//     const files = fs.readdirSync('./')
//     console.log(files)
// }catch(err){
//     console.log("Our error ===> ",err)
// }

try{
    const files = fs.readdirSync('./')
    console.log(files instanceof Array)
    console.log(files[0])
}catch(err){
    console.log("Our error ===> ",err)
}
