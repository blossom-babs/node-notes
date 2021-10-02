const { createReadStream } = require('fs');

const stream = new createReadStream('./content/big-file.txt', {highWaterMark: 90000}); // a path must be provided after createReadStream class has been initialized

/*where is data coming from? it is an inbuilt parameter, since we want to listen for a data,
 we pass in a data. In 14-request-event, we wanted to listen for a request. 
And on even emitter, we were listening for a response
*/

stream.on('data', (result) => { // the data is being read in 'chunks, hence the console'
    console.log(result); // using the template strings will log each and every data in the large file to the console
})

stream.on('error', (err) => {
    console.log(err)
})

