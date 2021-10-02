// simplifying callbacks and using asynchronous 
const util = require('util')
const { readFile, writeFile } = require('fs')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8')
        const second = await readFilePromise('./content/second.txt', 'utf8')
        await writeFilePromise('./content/async-code.txt', 'my name is Bimbo, Bimbo Owoyemi')
        console.log(first, second)
    } catch (err) {
        console.log(err);
    }
}

start()

// const getText = (path => {
//     return new Promise((reject, resolve) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// })

// getText('./content/second.txt').then(result => console.log(result)).catch(err => console.log(err))


