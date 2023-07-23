const EventEmitter = require('events');

const emitter = new EventEmitter();

// // 1
// // Register a listener
// emitter.on('eventName', function(){
//     console.log('Event Listener called !');
// });
// // Raise an event
// emitter.emit('eventName');



// // 2
// // Register a listener
// emitter.on('eventName', function(eventParam){
//     console.log('Event Listener called !', eventParam);
//     console.log('Event Listener called !', eventParam.id);
//     console.log('Event Listener called !', eventParam.url);
// });

// // Raise an event
// emitter.emit('eventName', {id: 1, url: 'http://'});





// 3
// Register a listener
emitter.on('eventName', (eventParam) => console.log('Event Listener called !', eventParam));

// Raise an event
emitter.emit('eventName', {id: 1, url: 'http://'});






// *****************************************************************************************************************
// note:

// module(events) exorts constructor(EventEmitter), and we create new instance(event) using constructor(EventEmitter). 

// emit, raise, produce -> event signal


// compare:

// // Register a listener
// emitter.on('messageLogged', function(){
//     console.log('Listener called !');
// });

// vs

// {/* <script>
// document.getElementById("myBtn").addEventListener("click", function() {
//   document.getElementById("demo").innerHTML = "Hello World";
// });
// </script> */}


// order of event raiser and listener
