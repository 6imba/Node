// create new file if not exist
// overwrite existing content

import fs from 'fs'

// fs.writeFile('./4.writeFile.txt','I am content.',()=>console.log("Content wrote to file."))

fs.writeFile('./4.writeFile.txt','I am content.',(err)=>{
    if(err) throw err
    console.log("Content wrote to file.")
})

// fs.writeFile('./testFolder/4.writeFile.txt','I am content.',(err)=>{
//     if(err) throw err
//     console.log("Content wrote to file.")
// })

