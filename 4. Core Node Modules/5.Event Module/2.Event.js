const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('meroEvent', ()=>console.log("Apple."))
emitter.on('meroEvent', ()=>console.log("Ball."))
emitter.on('meroEvent', ()=>console.log("Cat."))
emitter.on('meroEvent1', ()=>console.log("Malai suwqgat xa_1."))
emitter.on('meroEvent2', ()=>console.log("Malai suwqgat xa_2."))
emitter.on('meroEvent3', ()=>console.log("Malai suwqgat xa_3."))
emitter.on('meroEventPara', (a,b)=>console.log(`a: ${a} and b: ${b}`))



emitter.emit("meroEvent")
emitter.emit("meroEvent1")
emitter.emit("meroEvent2")
emitter.emit("meroEvent3")
emitter.emit("meroEventPara", 1000, 2000)
