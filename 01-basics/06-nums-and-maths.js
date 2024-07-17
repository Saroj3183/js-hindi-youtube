const score = 100
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString());  //convert number to string 
//console.log(balance.toString().length); //3

//console.log(balance.toFixed(2)); //100.00

const anotherNumber = 23.8966

//console.log(anotherNumber.toPrecision(3)); //23.9 
//console.log(anotherNumber.toPrecision(4));  //23.90

// const anotherNumberOne = 123.8966

// console.log(anotherNumberOne.toPrecision(3)); //124 
// console.log(anotherNumberOne.toPrecision(4)); //123.9

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); //10,00,000 -> add comma (,) in number

//+++++++++++++++++++MATHS++++++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4)); //4 
// console.log(Math.round(4.4)); //4
// console.log(Math.ceil(4.1));  //5 => choose top value 
// console.log(Math.floor(4.1));  //4 => choose lowest value
// console.log(Math.min(2,3,4,5));  //2
// console.log(Math.max(2,3,4,5));   //5


console.log(Math.random()); //gives random value between 0 to 1
console.log(Math.random() * 10 + 1); //value will be  >= 1  //return value between 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //gives value >= 10