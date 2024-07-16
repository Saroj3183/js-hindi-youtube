//2 types of datatypes basis on how to store and how to access
//there are two types of data : 1.Primitive (call by value) 
//                              2.Non-Primitive (call by reference)

// Primitive 
// 7 datatypes - String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.5 //number

const isLoggedIn = false  //boolean
const outsideTemp = null  //null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345665748078773n

//Reference (non-primitive) 

// Array , Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"] //array , datatype- object

let myObj = {     //object  datatype-object
    name:"saroj",
    age : 21,
}

const myFunction = function(){  //function  datatype-function
    console.log("hello world");
}

console.log(typeof heros);