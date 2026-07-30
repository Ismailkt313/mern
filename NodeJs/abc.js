let total = 0
process.on("message", (val) => {
    for (let i = 0; i < val; i++){
        total += i
    }
    process.send(total)
})