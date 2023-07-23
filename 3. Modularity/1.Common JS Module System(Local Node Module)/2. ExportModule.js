// // 1 Export Function
// function exp(){
//     console.log('Export Module!')
// }
// // module.exports = exp;//export function as function: output ==> [Function: exp]
// // console.log(module.exports)

// // module.exports.exp1 = exp;//export  function as object property_value: output ==> { exp1: [Function: exp] }
// // console.log(module.exports)


// 2 Export Object
amir ={
    name: "Amir Shrestha",
    no: 6,
    developer: true
}
module.exports = amir; //export as it is, object: output ==>{ name: 'Amir Shrestha', no: 6, developer: true }
// module.exports.amira1 = amir; //export the object_variable as  property_value inside object.(object of object: nested object): output ==>{ amira1: { name: 'Amir Shrestha', no: 6, developer: true } }
