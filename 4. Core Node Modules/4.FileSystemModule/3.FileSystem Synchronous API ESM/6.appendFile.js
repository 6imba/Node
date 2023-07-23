// create new file if not exist
// # Return: undefined

import fs from 'fs'

// fs.appendFileSync('./4.writeFile.txt', '---ok content---')

// const returnType = fs.appendFileSync('./4.writeFile.txt', '---ok content---')
// console.log(returnType)

const returnType = fs.appendFileSync('./noFile.txt', '---ok content---')
console.log(returnType)



// #Q. How to console error if file not found
