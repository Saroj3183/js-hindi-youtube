// let myName  = "saroj    "
// let myChannel = "chai     "

// console.log(myName.trim().length);//5
// console.log(myName.trueLength) 

let myHeros = ["thor", "spiderman"]

let myName = "saroj"

let heroPower = {
    thor : "hammar",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
      
    }
}

Object.prototype.saroj = function(){
    console.log(`saroj is present in all object `);
}


//koi object nu task perform krva method use thay 
//and property object ni information  ape

//array ma power inject kri to object access na kri shake e property
//but but object ma koi power inject kri to array, string and function access kri shake

// heroPower.saroj()
// myHeros.saroj() 
// myName.saroj()

Array.prototype.saySaroj = function(){
    console.log(`saroj says hello`);
    
}

myHeros.saySaroj() //we can access this method in array only.
// heroPower.saySaroj() //cant access in object 


//inheritance

const user = {
    username: "chai",
    email : "chai@google.com"
}
const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : 'js assignment',
    fullTime : true,

    __proto__: teachingSupport //to access teachingsupport property
}

teacher.__proto__  = user //teacher can access users property

//modern syntex
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUserName = "sarojthakor       "

String.prototype.trueLength = function(){
    console.log(`${this}`); //this is for current context 
    console.log(`length is : ${this.trim().length}`);
       
}

anotherUserName.trueLength() //11
"pratik  ".trueLength() //6
"saroj".trueLength() //5