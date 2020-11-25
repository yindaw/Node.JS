const { setImmediate } = require("timers");

setTimeout(() => {
    console.log("setTimeout");
}, 1);
setImmediate(() => {
    console.log("setImmediate");
});