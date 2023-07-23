// const EventEmitter = require('events'); //import EventEmitter class expose by core events module.
// console.log(EventEmitter) // <ref *1> [Function: EventEmitter] {}



// // 1:
// const EventEmitter = require('events'); //import EventEmitter class expose by core events module.
// const emitter = new EventEmitter(); //create an instance of a EventEmitter class.
// emitter.on('eventName', () => console.log('Event listened: called callback!')) // Register an event/event-listener.
// emitter.emit('eventName'); //Raise an event.
// // on,emit are the methods of EventEmitter class.
// // on method is used to listen to an raised event(register/define event-response)
// // emit method is used to raise/trigger/fire/invoke/call an event; emit(nameOfEvent)



// 2: Event on and emit.
const EventEmitter = require('events'); //import EventEmitter class expose by core events module.
const myEmitter = new EventEmitter();
myEmitter.on('tankFull', () => {
  console.log('Tank full!');
});
console.log('Start Fill petrol!')
setTimeout(()=>myEmitter.emit('tankFull'), 3000)
console.log('Still filling tank!')



// // 3: Create a custome class MyEmitter by extending EventEmitter.
// const EventEmitter = require('events'); //import EventEmitter class expose by core events module.
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on('tankFull', () => {
//   console.log('Tank full!');
// });
// console.log('Start Fill petrol!')
// setTimeout(()=>myEmitter.emit('tankFull'), 3000)
// console.log('Still filling tank!')



// We make/define/register custome event.
// we have just defined a new custome event but that respective event hasn't occur yet.
// therefore the code above occurs when event named as tankFull occurs/gets fire/ is detected.
// similar to, function defined code runs only when function is called.


// // setTimeout doesnt block code as it asynchronous fcuntion.
// // for loop blocks code as it synchronous.

