// 1
function myFirstFunc1(){
    console.log('Hi I am first function of common JS module!')
}
exports = myFirstFunc1;

export function myFirstFunc11(){
    console.log('Hi I am first function of common JS module!')
}



// 2
export function myFirstFunc2(){
    console.log('Hi I am myFirstFunc22!')
}
export function myFirstFunc22(){
    console.log('Hi I am myFirstFunc22!')
}
export function myFirstFunc222(){
    console.log('Hi I am myFirstFunc222!')
}



// 3
export function myFirstFunc3(){
    console.log('Hi I am myFirstFunc3!')
}



// 4
export default function myFirstFunc4() {
    console.log('Hi I am myFirstFunc4!')
}



// 5
function myFirstFunc5() {
    console.log('Hi I am myFirstFunc5!')
}
function myFirstFunc55() {
    console.log('Hi I am myFirstFunc55!')
}
function myFirstFunc555() {
    console.log('Hi I am myFirstFunc555!')
}
export default { myFirstFunc5, myFirstFunc55, myFirstFunc555 }