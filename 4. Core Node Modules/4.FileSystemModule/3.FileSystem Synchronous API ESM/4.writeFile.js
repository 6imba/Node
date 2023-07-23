// create new file if not exist
// overwrite existing content
// # Return: undefined

import fs from 'fs'

// fs.writeFileSync('./4.writeFile.txt','I am content.')

// const returnType = fs.writeFileSync('./4.writeFile.txt','I am content.')
// console.log(returnType)

// const returnType = fs.writeFileSync('./noFile.txt','I am content.')
// console.log(returnType)

try{
    fs.writeFileSync('./noFile.txt','I am content.')
}catch(err){
    console.log(err)
}
// #Q. How to console error if file not found

