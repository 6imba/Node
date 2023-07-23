// # Return: undefined

import fs from 'fs'

// fs.mkdirSync('./testDir')

// const returnType =  fs.mkdirSync('./testDir')
// console.log(returnType)

// fs.mkdirSync('./testDir',{recursive:true})

try{
    fs.mkdirSync('./testDir')
    console.log('New directory created!')
}catch(err){
    console.log("My error ===>",err)
}
