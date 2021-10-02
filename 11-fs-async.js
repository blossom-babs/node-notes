const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    let first = result
    console.log(result);

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        let second = result
        console.log(result);

        writeFile('./content/third-async.txt', `Hello. This is the first: ${first} and the second: ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})