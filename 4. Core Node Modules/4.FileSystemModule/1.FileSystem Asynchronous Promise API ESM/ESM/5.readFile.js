import fsp from 'fs/promises'

// const data = fsp.readFile('./test/myFile1.txt')
// console.log(data)

// const data = await fsp.readFile('./test/myFile1.txt')
// console.log(data)

// const data = await fsp.readFile('./test/myFile1.txt', 'utf8')
// console.log(data)

// const readData = async () => {
//     const data = await fsp.readFile('./test/myFile1.txt', 'utf8')
//     console.log(data)
// }
// readData()

// console.log("Program Start")
// const readData = async () => {
//     const data = await fsp.readFile('./test/myFile1.txt', 'utf8')
//     for(let i=0; i<=1000000000; i++){ var x=10}
//     for(let i=0; i<=1000000000; i++){ var x=10}
//     for(let i=0; i<=1000000000; i++){ var x=10}
//     console.log(data)
// }
// readData()
// console.log("Program End")



// console.log("Program Start")
// const readData = async () => {
//     const data = await fsp.readFile('./test/myFile1.txt', 'utf8')
//     for(let i=0; i<=1000000000; i++){ var x=10}
//     for(let i=0; i<=1000000000; i++){ var x=10}
//     for(let i=0; i<=1000000000; i++){ var x=10}
//     console.log(data)
// }
// await readData()
// console.log("Program End")





// # Syntax:
//     - fsPromises.readFile(path[, options])#
//     - Returns: <Promise> Fulfills with the contents of the file.
    
//     > </Promise>path <string> | <Buffer> | <URL> | <FileHandle> filename or FileHandle
//     > </FileHandle>options <Object> | <string>
//         encoding <string> | <null> Default: null
//         flag <string> See support of file system flags. Default: 'r'.
//         signal <AbortSignal> allows aborting an in-progress readFile




const data = await fsp.readFile('./test/myFile1.txt', 'utf8')
console.log(data)
