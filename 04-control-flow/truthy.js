const userEmail = "s@gmail.com"


if (userEmail) {  //in this we didnt pass any condition but still it execute bcozz we have assume it true
    console.log("got user email");
    
} else {
    console.log("don't have user email");
    
}

//Falsy values
// False , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

//Truthy values
// "0" , 'false' , [] , " " , {} , function(){}

//const userEmail = []

// if (userEmail.length === 0) {
//     console.log("array is empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
    
}

//Nullish Coalescing Operator(??): null undefined 
//null k undefined ni jagya ae koi value assign kri shaki

// let val1;
// val1 = 5 ?? 10  //5
// val1 = null ?? 10 //10 it prefer to take number
// val1 = undefined ?? 20 //20
// val1 = null ?? 15 ?? 20  // after null first value will be taken = 15

// console.log(val1);

//Terniary Operator

//condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); // more than 80




