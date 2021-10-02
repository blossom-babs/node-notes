const { writeFileSync } = require('fs')

for (let i = 0; i < 100000; i++) {
    writeFileSync('./content/big-file.txt', `Hello, it's Blossom again with a forever loop that iterates at ${i}. \n`, { flag: 'a'})
}