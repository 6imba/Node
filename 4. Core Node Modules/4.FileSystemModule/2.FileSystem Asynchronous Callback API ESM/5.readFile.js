import fs from 'fs'

// fs.readFile('./4.writeFile.txt',(err,data)=>console.log(data))

// fs.readFile('./4.writeFile.txt',(data,err)=>{
    //     if(err) throw err
    //     console.log(data)
    // })

// fs.readFile('./4.writeFile.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

fs.readFile('./4.writeFile.txt',(data)=>console.log(data))
