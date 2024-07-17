const name = "saroj"
const repoCount = 7

//console.log(name + repoCount + "value");

console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("saroj-vt-com")

// console.log(gameName[1]); //a
// console.log(gameName.__proto__); //{}
// console.log(gameName.toUpperCase());  //SAROJVT
// console.log(typeof gameName); //object
// console.log(gameName.length); //7
// console.log(gameName.charAt(6)); //t
// console.log(gameName.indexOf('s')); //0

const newString = gameName.substring(0,4)
console.log(newString); //saro

const anotherString = gameName.slice(-7,5) //reverse string - saroj when gamename=sarojvt
console.log(anotherString);    //(0,4) - saro

const anotherStringOne = "     saroj    "
console.log(anotherStringOne);
console.log(anotherStringOne.trim()); //saroj-it removes space from strat and end


const url = "https://saroj.com/saroj20%thakor"
console.log(url.replace('20%' ,'-'));

console.log(url.includes("saroj")); //true

console.log(gameName.split('-')); //output arr- ['saroj','vt','com']