// response in http

const http = require('http')

// without if/else, the program runs into an erro
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the homepage')
    }
    else if (req.url === '/about') {
        res.end('This is the about page')
    } else {
        res.end(
            `<h1>Oops!</h1>
            <p>404! this page cannot be founnd</p>
            <a href="/">Go back home</a>`
        )
    }
})

server.listen(5000)