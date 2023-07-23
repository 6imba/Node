// Returns: <fs.Stats> object

import fs from 'fs'

const stats = fs.statSync('./4.writeFile.txt')
console.log(stats)

// const stats = fs.statSync('./noFile.txt')
// console.log(stats)

// try{
//     const stats = fs.statSync('./noFile.txt')
//     console.log(stats)
// }catch(err){
//     console.log(err)
// }