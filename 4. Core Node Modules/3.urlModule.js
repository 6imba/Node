// # URLis the global Class owned by inbuilt core URL module
const myURL = new URL('https://example.org');

myURL.pathname = '/a/b/c';
myURL.search = '?d=e'; //get parameters
myURL.hash = '#fgh'; // navigate to particular section

console.log(myURL) //gives url object
console.log(myURL.href) //gives href property of url object
console.log(myURL.hash) //gives hash property of url object


// // // # URLis the global Class owned by inbuilt core URL module
// const myURL = new URL('https://example.org');
//     // OR
// const url = require('url')
// const myURL = new url.URL('https://example.org');




// const url = require('url')
// urlObj1 = url.parse('http://localhost:3000/sreach-employee?id=101#table')
// console.log(urlObj1)

// const urlObj2 = new URL('http://localhost:3000/sreach-employee?id=101#table');
// console.log(urlObj2)

// console.log(URL == require('url').URL) // check reference to same reference object
// console.log(URL === require('url').URL) 

// console.log({a:1} == {a:1}) check reference to two difference reference object
// console.log({a:1} === {a:1})






// console.log(new URL('http://localhost:3000'))
// // URL {
// //     href: 'http://localhost:3000/',  
// //     origin: 'http://localhost:3000', 
// //     protocol: 'http:',
// //     username: '',
// //     password: '',
// //     host: 'localhost:3000',
// //     hostname: 'localhost',
// //     port: '3000',
// //     pathname: '/',
// //     search: '',
// //     searchParams: URLSearchParams {},
// //     hash: ''
// //   }

// console.log(require('url'))
// {
//     Url: [Function: Url],
//     parse: [Function: urlParse],
//     resolve: [Function: urlResolve],
//     resolveObject: [Function: urlResolveObject],  
//     format: [Function: urlFormat],
//     URL: [class URL],
//     URLSearchParams: [class URLSearchParams],     
//     domainToASCII: [Function: domainToASCII],     
//     domainToUnicode: [Function: domainToUnicode], 
//     pathToFileURL: [Function: pathToFileURL],     
//     fileURLToPath: [Function: fileURLToPath],     
//     urlToHttpOptions: [Function: urlToHttpOptions]
//   }

// console.log(require('url').Url)//[Function: Url]
// console.log(require('url').URL)//[class URL]

