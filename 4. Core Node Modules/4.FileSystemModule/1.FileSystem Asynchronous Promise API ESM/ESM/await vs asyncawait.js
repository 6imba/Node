import fsp from 'fs/promises'

// //await:
// try{
//     const data = await fsp.readFile('../FileSystem-Promise API.txt','utf8')
//     console.log(data)
// }catch(err){
//     console.log("Error ===> ",err)
// }
// console.log("End")


// // asyncawait:
// const func1 = async () => {
//     try{
//         const data = await fsp.readFile('../FileSystem-Promise API.txt','utf8')
//         console.log(data)
//     }catch(err){
//         console.log("Error ===> ",err)
//     }
// }
// func1()
// console.log("End")

// - await keyword waits and return resolved promise data or rejected error data.
