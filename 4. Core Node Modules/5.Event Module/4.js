// # 1:
// const obj1 = {name:"Amir Shrestha", age:22}
// obj1.on('intro',()=>console.log(`${name} is ${age} years old.`))
// obj1.emit('intro')


// // # 2:
// const EventEmitter =  require('events')
// const person =  new EventEmitter()
// person.on('name',(data)=>console.log(`Name is ${data.name}.`))
// person.on('age',(data)=>console.log(`Age is ${data.age} years old.`))
// person.on('intro',(data)=>console.log(`${data.name} is ${data.age} years old.`))

// person_1 = {name:"Amir Shrestha", age:22}
// person_2 = {name:"Lina Shrestha", age:21}
// person_3 = {name:"Ziya Shrestha", age:19}

// person.emit('name', person_1)
// person.emit('age', person_1)
// person.emit('intro', person_1)
// person.emit('intro', person_2)
// person.emit('intro', person_3)