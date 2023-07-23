// const {add, sub, name, mul} = require('./1.Export') // ReferenceError: require is not defined in ES module scope, you can use import instead


// //1. default export:
// // import {add, sub, name, mul} from "./1.Export.mjs"; //Solution named export
// import add from "./1.Export.mjs";
// console.log(add(2,3))

// //2.1 named export:
// import {add, sub, name, mul} from "./1.Export.mjs"; //Solution named export
// console.log(add(2,3))
// console.log(sub(3,2))
// console.log(mul(5,6))
// console.log(name)

// //2.2 named export all:
// import * as module from "./1.Export.mjs"; //Solution named export
// console.log(module.add(2,3))
// console.log(module.sub(3,2))
// console.log(module.mul(5,6))
// console.log(module.name)


// // 3.1 Import both default and named export:
// import home,{add, sub, name, mul} from "./1.Export.mjs";
// console.log(home)
// console.log(add(2,3))
// console.log(sub(3,2))
// console.log(mul(5,6))
// console.log(name)



// // 3.1 Import bot default and named export:
// import home,* as myModule from "./1.Export.mjs";
// console.log(home)
// console.log(myModule.add(2,3))
// console.log(myModule.sub(3,2))
// console.log(myModule.mul(5,6))
// console.log(myModule.name)


// import {router} from './routes/webRoute.js' //==> not default export
    // VS
// import router from './1.Export.mjs' //==> default export
// import {add} from './1.Export.mjs' //==> named export

// - while importing default export can have any name but not inside {}
// - while importing named export can have same name and inside {}
