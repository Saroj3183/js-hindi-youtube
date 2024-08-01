//if

const isUserLoggedIn = true // (= assignment oper i.e true value assigned in isloggedin variable)

// if(2 != 3){  //if condition is true then it will execute internal code inside scope{}

//     console.log("executed"); //executed
// }
//console.log("not executed");

// const temperature = 41

// if (temperature === 41) {    //  condi. is true so it print = less than 50
//     console.log("less than 50");     
// }else{
//     console.log("temperature is more than 50");
// }
// console.log("executed"); //it will be printed in every condition as it is out of scope so.


//comparision operator = < ,> ,<= ,>= ,==(equal) ,!= , ===(check datatype) , !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`); 
// }
// console.log(`user power: ${power}`); //{it gives an error bcoz we cant define block scope variable in global scope-
// ( var scope is completely global)   -that is why we use let and const if we use var than it print this statement}

//const balance = 1000 

//if (balance > 500) console.log("test"), console.log("test2");  //called implicit scope

// nested to check multiple condition

// if (balance < 500) {
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200"); //print this statement
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 3) {  // && (and *) t , t => t  & t, f => f
    console.log("allow to purchase course");
}

if (loggedInFromGoogle || loggedInFromEmail) { // ||(or +)
    console.log("user loggedin");
}