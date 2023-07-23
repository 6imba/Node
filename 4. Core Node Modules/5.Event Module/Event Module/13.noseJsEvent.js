// An event is a signal that indicates that something has happen in our application

// For example in node we have class called HTTP that is used to built a web server,
// So we listen on a given port and every time we receive request on that port that HTTP class raises an event,
// Now our job is to respond to that event




// Events Module
// Event Arguments
// Extending EventEmitter




const EventEmitter = require('events'); //create new event class: EventEmitter

// // 1
// const emitter = new EventEmitter(); //create an instance:emitter of a class: EventEmitter
// // Register an listener
// emitter.on('messageLogged', () => console.log('Listener called!')) //response to particular event
// // Raise an event
// emitter.emit('messageLogged');//define event-name
// // on, emit are the methods of EventEmitter class.
// // emit method is used to raise an event; emit(nameOfEvent) //call event-name
// // on method is used to listen to an raised event // define event-response



// //2
// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('tankFull', () => {
//   console.log('Stop petrol pump!');
//   setTimeout(() => {
//       console.log('Gengle remainder! Stop petrol pump.')
//   }, 3000)
//   console.log('set time out deffer!')
// });

// console.log('Script is till running!')
// // myEmitter.emit('event');

// // make custome event // we have jsut defined a new custome event but that respective event hasnt occur yet.
// // therefore the code above occurs when event named as tankFull occurs/gets fire/ is detected.
// // similar to, function defined code runs only when function is called.

// myEmitter.emit('tankFull');
// console.log('Script is till running!')
// myEmitter.emit('tankFull');
// console.log('Script is till running!')

// // setTimeout doesnt block code

