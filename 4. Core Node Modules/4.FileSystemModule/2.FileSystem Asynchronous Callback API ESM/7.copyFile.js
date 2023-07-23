// Create new file if not exist.

import fs from 'fs'

// fs.copyFile('./4.writeFile.txt','./7.copyFile.txt',()=>console.log("File content copied."))

fs.copyFile('./4.writeFile.txt','./7.copyFile.txt',(err)=>{
    if(err) throw err
    console.log("File content copied.")
})