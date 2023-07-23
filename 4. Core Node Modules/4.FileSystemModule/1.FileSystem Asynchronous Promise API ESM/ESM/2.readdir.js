import fsp from 'fs/promises'

// const data = fsp.readdir('C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test')
// console.log(data)

// const data = await fsp.readdir('C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test')
// console.log(data)

// const files = await fsp.readdir('C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test')
// for (let file in files){
//     console.log(file)
// }

// const files = await fsp.readdir('C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test')
// for (let index in files){
//     console.log(files[index])
// }

// const files = await fsp.readdir('C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test')
// for (let file of files){
//     console.log(file)
// }

// try{
//     const files = await fsp.readdir('C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test')
//     for (let file of files){
//         console.log(file)
//     }
// }catch(err){
//     console.log("Error ==> ",err)
// }




// const readMyDir = () => {
//     try{
//         const files = await fsp.readdir('C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test')
            // SyntaxError: Unexpected reserved word await
//         for (let file of files){
//             console.log(file)
//         }
//     }catch(err){
//         console.log("Error ==> ",err)
//     }
// }
// console.log("Execute Program!")
// console.log("Statement 1...............")
// console.log("Statement 2...............")
// readMyDir()
// console.log("Statement 3...............")
// console.log("Statement 4...............")



// const readMyDir = async () => {
//     try{
//         const files = await fsp.readdir('C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test')
//         for (let file of files){
//             console.log(file)
//         }
//     }catch(err){
//         console.log("Error ==> ",err)
//     }
// }
// console.log("Execute Program!")
// console.log("Statement 1...............")
// console.log("Statement 2...............")
// readMyDir()
// console.log("Statement 3...............")
// console.log("Statement 4...............")



// const readMyDir = async () => {
//     try{
//         const files = await fsp.readdir('C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test')
//         for (let file of files){
//             console.log(file)
//         }
//     }catch(err){
//         console.log("Error ==> ",err)
//     }
// }
// console.log("Execute Program!")
// console.log("Statement 1...............")
// console.log("Statement 2...............")
// let myReturn = readMyDir()
// console.log(myReturn)
// console.log("Statement 3...............")
// console.log("Statement 4...............")



const readMyDir = async () => {
    try{
        const files = await fsp.readdir('C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test')
        for (let file of files){
            console.log(file)
        }
    }catch(err){
        console.log("Error ==> ",err)
    }
}
console.log("Execute Program!")
console.log("Statement 1...............")
console.log("Statement 2...............")
let myReturn = readMyDir()
console.log(myReturn)
console.log("Statement 3...............")
console.log("Statement 4...............")
for(let i=0; i<=1000000000; i++){ var x=10}
for(let i=0; i<=1000000000; i++){ var x=10}
for(let i=0; i<=1000000000; i++){ var x=10}
for(let i=0; i<=1000000000; i++){ var x=10}
console.log(myReturn)

