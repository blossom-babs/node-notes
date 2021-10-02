// commonJs - every file is a module in node
// modules - encapsulated code

const names = require('./4-names');
const sayHello = require('./5-utils');
const {items, singlePerson} = require('./6-alternative-module');
const addValues = require ('./7.function-module');

addValues(1,10)
// console.log(items);

// sayHello("Blossom");
// sayHello(names.myFathersName);
// sayHello(names.myMothersName);