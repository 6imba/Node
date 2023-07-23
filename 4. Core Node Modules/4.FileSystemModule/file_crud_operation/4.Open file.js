// # Open file:
    // > syntax: fs.open( filename, flags, mode, callback )

const fs = require("fs")

// fs.open("../file_base/4.Open file.txt", 'r', (data)=>console.log(data))
fs.open("./file_base/4.Open file.txt", 'w+', (err,data)=>{
    if(err) throw err;
    console.log(data)
})
