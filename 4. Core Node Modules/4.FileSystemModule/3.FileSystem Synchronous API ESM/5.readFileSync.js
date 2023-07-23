// Returns: <string> | <Buffer>

import fs from 'fs'

const data = fs.readFileSync('./4.writeFile.txt','utf8')
console.log(data)

// const data = fs.readFileSync('./noFile.txt','utf8')
// console.log(data)


// try{
//     const data = fs.readFileSync('./noFile.txt','utf8')
//     console.log(data)
// }catch(err){
//     console.log("Errrrrrrrrrrrrrorrrrrrrrrrr ==> ",err)
// }