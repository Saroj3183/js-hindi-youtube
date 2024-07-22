//Arrays

const myArr = [0,1,2,3,4,5] //1st method
const heros = ["shaktiman" , "naagraj"]

const myArr2 = new Array(1,2,3,4,5) // 2nd method of declaring array

//console.log(myArr[0]);

// Array methods

// myArr.push(6)
// myArr.push(7) 
// myArr.pop() //remove last value of an array

//myArr.unshift(8) // add value at start of an array
//myArr.shift() // remove value from start of an array

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(3)); //3

const newArr = myArr.join() //add element of an array in new array and converted it into a string

// console.log(myArr); //[0,1,2,3,4,5]
// console.log(newArr); // 0,1,2,3,4,5
// console.log(typeof newArr); //string

//slice , splice

console.log("A " , myArr);

const myn1 = myArr.slice(1,3)  // slice => last range not included
console.log(myn1); // [1,2] // in slice there is no manipulation in original arr

console.log("B " , myArr);

const myn2 = myArr.splice(1,3) // splice => last range included but in original array that range will be deleted
console.log(myn2); // [1,2,3]  // in splice original arr will be manipulated

console.log("C " , myArr); //[0,4,5] => in splice method 1,2,3 element will be removed
