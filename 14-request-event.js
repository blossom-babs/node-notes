const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => { // use request not req
    res.end(`the event emitter has been used to listen to the server`)
})

server.listen(5000, () => console.log(`port started`))