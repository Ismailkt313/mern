import express from "express"
import os from "os"
const app = express()

console.log((os.uptime()/60/60).toLocaleString())



app.listen(3000,() => {
    console.log("running")
})