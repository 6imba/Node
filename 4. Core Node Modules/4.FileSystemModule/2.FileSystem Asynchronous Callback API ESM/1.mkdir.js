import fs from 'fs'

// fs.mkdir('./testDir',()=>console.log('New directory created!'))

// fs.mkdir('./testDir',(err)=>{
//     if(err){
//         console.log("My error: ",err)
//     }else{
//         console.log('New directory created!')
//     }
// })

// fs.mkdir('./testDir',(err)=>{
//     if(err) throw err;
//     console.log('New directory created!')
// })

// fs.mkdir('./testDir',{recursive:true},(err)=>{
//     if(err) throw err;
//     console.log('New directory created!')
// })

// fs.mkdir('C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Asynchronous Callback API ESM\\noDir\\testDir',(err)=>{
//     if(err) throw err;
//     console.log('New directory created!')
// })

fs.mkdir('C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Asynchronous Callback API ESM\\noDir\\testDir',{recursive:true},(err)=>{
    if(err) throw err;
    console.log('New directory created!')
})