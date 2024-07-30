const user = {
    username : "saroj",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to this page`);
        //console.log(this); => current context na variable (value) ape
    }

}
// user.welcomeMessage() // saroj, welcome to this page
// user.username = "pratik"
// user.welcomeMessage() //pratik , welcome to this page

//console.log(this);// {} <= node environment &&& browser => window object (global object)

// function chai(){
//      let username = "saroj"
//     //console.log(this.username); //undefined , bcoz this is only works on object
// }
// chai()

// const chai = function(){
//     let username = "saroj"
//     console.log(this); //global object
// }
// chai()

//++++++++++++++++++ Arrow function      +++++++++++++++++++++++++++++++++++++++

// const chai = () => {     //explicit return when we use return keyword 
//      let username = "saroj"
//     console.log(this); //{}
// }
// chai()


// jyare arrow function ma this keyword use kri tyare e output = {}  
//jyare regular function ma this keyword print kri to output ma = global object

// const addTwo = (num1,num2) => {     explicit return
//     return num1 + num2               
// }

// console.log(addTwo(2,3)) //5

// const addTwo = (num1,num2) =>  num1 + num2  //5  implicit return

//const addTwo = (num1,num2) => ( num1 + num2 ) //5

const addTwo = (num1,num2) => ( { username : "saroj"} ) // username : 'saroj'
console.log(addTwo(2,3))
