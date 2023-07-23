// Create new file if not exist.
// # Return: undefined

import fs from 'fs'

// fs.copyFileSync('./4.writeFile.txt','./7.copyFile.txt')

// const returnType = fs.copyFileSync('./4.writeFile.txt','./7.copyFile.txt')
// console.log(returnType)

fs.copyFileSync('./noFile.txt','./7.copyFile.txt')

// try{
//     fs.copyFileSync('./noFile.txt','./7.copyFile.txt')
// }catch(err){
//     console.log("errrrr ===========================> ",err)
// }
