import express from "express"
import { EventEmitter } from "events"
import fs from "fs"

const app = express()
const events = new EventEmitter()

function Auth(req, res, next) {
    let current = new Date().getHours()
    let allow = current >= 18 && current < 21
    if (!allow) next() 
    return "its blocked time"
}
console.log(Auth())
events.on("message",(data) => {
    fs.writeFile("file.txt", data, () => {
        console.log("file write") 
    })  
})

let data = "  dd"
events.emit("message",data)

app.listen(4500,()=> {
    console.log("running server")
})