import fs from 'fs'

// fs.appendFile('4.writeFile.txt', '---append content---',()=>console.log("Data append."))

fs.appendFile('4.writeFile.txt', '---append content---',(err)=>{
    if(err) throw err
    console.log("Data append.")
})

