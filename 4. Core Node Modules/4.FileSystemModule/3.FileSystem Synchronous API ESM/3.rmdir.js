
import fs from 'fs'

// fs.rmdirSync('./test')

// // fs.mkdirSync('./test')
// fs.rmdirSync('./test')

try{
    fs.rmdirSync('./test')
}catch(err){
    console.log(err)
}