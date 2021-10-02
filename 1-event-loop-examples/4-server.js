const http = require('http')

const server = http.createServer((req, res) => {
    console.log("request has been sent")
    res.end("hello fam, it's your girl, B")
})

server.listen(5000, (err) => {
    if (err) console.log(err)
console.log("App is listening on port 5000")
})