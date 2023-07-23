const EventEmitter = require("events");

const event = new EventEmitter();

// event define: event listener
event
    .on("greet", () => {
        console.log("Namaste!")
    })
    .on("bio", () => {
        console.log("Name: Amir")
    })
    .on("bio", () => {
        console.log("Stack: MERN")
    })
    .on("check", (statusCode, statusMessage) => {
        console.log(`Status: ${statusMessage} (${statusCode})`)
    });

// event call: event listen
// listen, hit, trigger, call, invoke, emit to event:
event.emit("greet")
event.emit("bio")
event.emit("check", 200, "ok"); // parameter callback

// Note: First define then call.(strict)
