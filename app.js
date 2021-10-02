const http = require('http')
const { readFileSync, createReadStream } = require('fs')

const server = http.createServer((req, res) => {
    // let text = readFileSync('./content/big-file.txt', 'utf8')
    // res.end(text)

    let fileStream = createReadStream('./content/big-file.txt', 'utf8')

    fileStream.on('open', () => {
        fileStream.pipe(res) // after a file stream has been opened, it can be read, accepting res as its argument.
    })

    fileStream.on('error', (err) => {
        console.log(err);
    })
})

server.listen(5000, () => console.log(`server started on port 5000`))