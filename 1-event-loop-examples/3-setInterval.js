setInterval(() =>{
    console.log(`every 2 seconds, I will get incremented ${i++}`)
}, 2000)

console.log("This will run first because setInterval is asychronous")

/*
observations: process(task) will continue to run unless it is killed
*/