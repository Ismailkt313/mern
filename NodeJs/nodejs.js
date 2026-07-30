const { fork } = require("child_process")
const {parentPort} = require("worker_threads")

const child = fork("./abc")
// parentPort.postMessage()
child.send(30)

child.on("message", (data) => {
    console.log("message recieved", data)
})