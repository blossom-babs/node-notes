const os = require('os')

//console.log(os.userInfo());

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(os.uptime());
//console.log(currentOs)