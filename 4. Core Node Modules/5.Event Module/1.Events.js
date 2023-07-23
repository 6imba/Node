// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// emitter.on('meroEvent', ()=>console.log("Malai suwqgat xa.")) // define event first
// emitter.emit("meroEvent") // then call that event



// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// emitter.emit("meroEvent") // then call that event
// emitter.on('meroEvent', ()=>console.log("Malai suwqgat xa.")) // define event first



// // Aaa: Custome event.
// const EventEmitter = require('events'); //1. import event constructor class from event module.
// console.log(EventEmitter) 
// const emitter = new EventEmitter(); //2. construct event object
// // console.log(emitter)
// //3. Register a event-listener
// emitter.on('eventName', function(){
//     console.log('Event Listener called !');
// });
// //4. Raise/trigger an event
// emitter.emit('eventName');



// // Bbb: Custome event with parameter.
// const EventEmitter = require('events'); //1. import event constructor class
// const emitter = new EventEmitter(); //2. construct event object.
// //3. Register a listener:
// emitter.on('eventName', function(eventParam){
//     console.log('Event Listener called !', eventParam);
//     console.log('Event Listener called !', eventParam.id);
//     console.log('Event Listener called !', eventParam.url);
// });
// //4. Raise an event
// emitter.emit('eventName', {id: 1, url: 'http://'});



// // Ccc: Custome event an its prototpe method_property: on,emit...
// const EventEmitter = require('events'); //1. import event constructor class
// const emitter = new EventEmitter(); //2. construct event object.
// // // Register a listener
// // emitter.on('eventName', (eventParam) => console.log('Event Listener called !', eventParam));
// // // Raise an event
// // emitter.emit('eventName', {id: 1, url: 'http://'});
// console.log(emitter.on)
// console.log(emitter.emit)


// **********************************************************************************************************************************************************************************************

    // # Note:
        // In node, require('events') is a core_module that expose event_constructor(EventEmitter).
        // object instanciated/constructed with EventEmitter_constructure has its own_pre-define property/methods:
        // - .emit()
        // - .on()
        // console.log(emitter.on) ==> [Function: addListener]
        // console.log(emitter.emit) ==> [Function: emit]
        
        // emit/raise/trigger/fire event_with_certain_name ---> produce event signal ---> listen to event_with_certain_name ---> execute event_handler_callback.
        // order of event raiser and listener
        
// **********************************************************************************************************************************************************************************************

// Compare Node VS JavaScript:

// // Register a listener:
// emitter.on('messageLogged', function(){
    //     console.log('Listener called !');
    // });
    
    // VS
    
    // {/* <script>
    // document.getElementById("myBtn").addEventListener("click", function() {
        //   document.getElementById("demo").innerHTML = "Hello World";
        // });
    // </script> */}
    
// **********************************************************************************************************************************************************************************************

// // Debug:
// const EventEmitter = require('events'); //1. import event constructor class from event module.
// // console.log(EventEmitter) // <ref *1> [Function: EventEmitter] {} ==. object constructor function.
// // console.log(typeof(EventEmitter)) //function
// // console.log(EventEmitter instanceof Function) //true
// // console.log(EventEmitter instanceof Object) //true

// const emitter = new EventEmitter(); //2. construct event object
// // console.log(emitter) //EventEmitter{}
// // console.log(typeof(emitter)) //object
// // console.log(emitter instanceof Object) //true  

// // //3. Register a event-listener
// // emitter.on('eventName', function(){
// //     console.log('Event Listener called !');
// // });
// // //4. Raise/trigger an event
// emitter.emit('eventName');

// //// list of property that emmiter object holds:
// // console.log(Object.keys(emitter))


// //// list of property that emmiter_object and its prototype holds:
console.log(Object.getPrototypeOf(emitter))



