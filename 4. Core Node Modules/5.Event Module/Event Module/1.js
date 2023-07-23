const EventEmitter = require("events");
// console.log(typeof(EventEmitter)) //function
// console.log(typeof(http)) //object

const event = new EventEmitter();

// define event: listener
event.on("greet", () => {
    console.log("Namaste!")
})
event.on("bio", () => {
    console.log("Name: Amir")
})
event.on("bio", () => {
    console.log("Stack: MERN")
})
event.on("check", (statusCode, statusMessage) => {
    console.log(`Status: ${statusMessage} (${statusCode})`)
})

// fire, hit, trigger, detect, emit to event:
event.emit("greet"); // single callback
event.emit("bio"); // multiple callback
event.emit("check", 200, "ok"); // parameter callback

// Note: First define then call.(strict)
// console.log(event.emit("greet")) //true
