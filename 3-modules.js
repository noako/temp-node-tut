const amount = 5

// if(amount < 10){
//   console.log('Small Number');
// }else{
//   console.log('Large Number');
// }

// console.log(`het it's my first node app!!!`);


//modules - encapsulated code (only share minimum)
//every file in node is a module

//   ./ is necessary for your own files
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
//console.log(data);

console.log(sayHi);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);


//console.log()
require('./7-mind-granade');