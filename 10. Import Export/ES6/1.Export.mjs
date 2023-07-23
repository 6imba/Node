const home = "Export Module";

function add(x, y){
    return x+y;
}

function sub(x, y){
    return x-y;
}

function mul(x, y){
    return x*y;
}

const name = "Simba";

// // 1.ES6 default export.
// export default add;
// // export default {add, sub, mul, name}; //solution named export.
// // we can only export one default variable per module. Assign any identifier at the time of import.

// 2.ES6 named export.
// export default home;
export {add, sub, mul, name}; //solution named export.
// // we can export  many variable per module. Assign same identifier as in export module at the time of import.