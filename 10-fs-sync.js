const { readFileSync, writeFileSync } = require('fs')
//const fs = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second)

writeFileSync('./content/third.txt', `Hello. This is the first: ${first} and the second: ${second}`)