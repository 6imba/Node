// 1
console.log(require("./6. Export")) // ==> Hi string
console.log(typeof(require("./6. Export"))) // ==> string


// // 1
// const load1 = require("./6. Export");
// console.log(load1) // ==> Hi string
// console.log(typeof(load1)) // ==> string


// // 2
// const load1 =require("./6. Export");
// console.log(load1) // ==> [Function: myFunc1]
// console.log(typeof(load1)) // ==> function
// console.log(load1()) // ==> true


// // 3
// const Obj =require("./6. Export");
// console.log(Obj) // ==> { funcA: [Function: myFunc1] }
// console.log(typeof(Obj)) // ==> object
// console.log(Obj.funcProperty) // ==>  [Function: myFunc1]
// console.log(Obj.funcProperty()) // ==>  true
//     // - The exports is an object. So, you can attach properties or methods to it. The example above exposes an object with a property(funcProperty) and its value exported from 6. Export.js module.


// // 4
// var person = require('./6. Export.js');
// console.log(person)
// var person1 = new person('James', 'Bond');//function constructor
// console.log(person1.fullName());