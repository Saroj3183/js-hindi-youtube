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

//console.log(id === anotherId); //false

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

//console.log(typeof heros); //object

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(primitive) , Heap(non primitive)
// stack - variable declare kri to aeni copy mle 
/* heap - jyare heap ma object k kai define kri to reference mle original value mle 
            j b value change kri e original value ma change thay*/

let myYoutubename = "sarojthakordotcom"
let anotherName = myYoutubename

anotherName = "chaiaurcode"

console.log(anotherName);  //chaiaurcode
console.log(myYoutubename);  //sarojthakordotcom

let userOne = {
    Email : "user@gmail.com",
    Upi :"user@ybl"
}

let userTwo = userOne

userTwo.Email = "saroj@313"

console.log(userOne.Email);
console.log(userTwo.Email);
