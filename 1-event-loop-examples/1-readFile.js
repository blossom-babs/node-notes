const {readFile} = require('fs')

console.log('start the first task')

readFile('./content/first.txt', 'utf8', (err, reques) => {
    if (err){
        console.log(err);
    }else{
        console.log(request);
    }
})

console.log('starting the next task')