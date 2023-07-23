// 1
module.exports = exportedVariable1; //Export
const exportedVariable = require("./exporting_module") //Import
// exportedVariable = = exportedVariable1

// 2
module.exports.key = exportedVariable1; //Export
var exportedVariableAsObject = require('./exporting_module') //Import
// exportedVariableAsObject = {key: exportedVariable1}

// 3
module.exports = exportedVariable1; //Export
module.exports = exportedVariable2; //Export
const exportedVariable = require("./exporting_module"); //Import
// exportedVariable = exportedVariable2

// 4.1 Export Multiple Variable binding inside object using Dot property accessor && Import whole exported variable as inside Object-Key.
module.exports.key1 = exportedVariable1; //Export
module.exports.key2 = exportedVariable2; //Export
module.exports.key3 = exportedVariable3; //Export
const exportedMultipleVariableAsObject = require('./exporting_module') //Import
// exportedMultipleVariableAsObject = {key1: exportedVariable1, key2: exportedVariable2, key3: exportedVariable3}
// exportedMultipleVariableAsObject.key1 = exportedVariable1 //Fetching variable from exported object

// 4.2 Export Multiple Variable binding inside object using Dot property accessor && Import whole exported variable as as variable as it is using object destructure.
module.exports.key1 = exportedVariable1; //Export
module.exports.key2 = exportedVariable2; //Export
module.exports.key3 = exportedVariable3; //Export
const {key1, key2, key3} = require('./exporting_module') //Import
// key1 = exportedVariable1
// key2 = exportedVariable2
// key3 = exportedVariable3
// Using Object Destructor to fetch all varibles binded inside object by export module.

// 5  Export Multiple Variable binding inside object using object destructor.
module.exports= {exportedVariable1, exportedVariable2, exportedVariable3}; //Export
const {exportedVariable1, exportedVariable2, exportedVariable3} = require('./exporting_module') //Import: Object destructuring




// -------------------------------------------------------------------------------------------------------------------------------

// #Expoting:
// 1 Export object directly:
module.exports = {
    name: "Amir Shrestha",
    no: 6,
    developer: true
}



// // 2 Assign object in variable
// amir ={
//     name: "Amir Shrestha",
//     no: 6,
//     developer: true
// }
// // 2.1 Assign object in variable and Export variable holding object:
// module.exports = amir; //export as it is, object: output ==>{ name: 'Amir Shrestha', no: 6, developer: true }
// // 2.2 Assign object in variable and Export object with key and value as variable holding object:
// module.exports.amira1 = amir; //export the exported variable as object: output ==>{ amira1: { name: 'Amir Shrestha', no: 6, developer: true } }


// // 3 Export Multiple variale holding object seperately:
// function myFirstFunc(){
//     console.log('Hi I am first function of common JS module!')
// }
// function mySecondFunc(){
//     console.log('Hi I am second function of common JS module!')
// }
// module.exports = myFirstFunc;
// module.exports = mySecondFunc;


// // 4 Export Multiple variale holding object seperately as object value:
// function add(x, y){
//     return x+y;
// }
// function sub(x, y){
//     return x-y;
// }
// module.exports.addPro = add;
// module.exports.subPro = sub;


// // 5 Export Multiple variale holding object bind together inside a single object: This is practise most
// const userRegistrationGet = async (req, res) => {
//     res.render("register", { msg: ""});
// };
// const userLoginGet = async (req, res) => {
//     res.render("login", { msg: ""});
// };
// module.exports = {
//     userRegistrationGet,
//     userLoginGet,
// };
