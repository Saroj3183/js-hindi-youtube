//two method to declare object 
//1.method = constructor = singleton koi b constructor thi banavi to singleton ek object bane 
// constructor thi bane to j singleton 
Object.create //=> called constructor method ama j singleton bane

//2.method = literals jem declare kri to singleton nhi bantu
//object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "saroj",
    "full name":"saroj thakor",
    [mySym] : "mykey1",
    age : 21,
    location : "ahmedabad",
    emaill : "saroj@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","tuesday"]
}

// console.log(JsUser.emaill); // method 1 to access email => saroj@gmail.com
// console.log(JsUser["emaill"])// method 2 to access email =>saroj@gmail.com
// console.log(JsUser["full name"]); 
// console.log( JsUser.mySym); //this is not right method to access symbol 
// console.log( JsUser[mySym]);//this is right method to access symbol

JsUser.emaill = "saroj@google.com"
//Object.freeze(JsUser) //cant change value
JsUser.emaill = "saroj@chatgpt.com"
//console.log(JsUser);

JsUser.greetings = function(){
    console.log("hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user , ${this.name}`);
}

console.log(JsUser.greetings()); //hello js user
console.log(JsUser.greetingTwo());// hello js user , saroj

//console.log(JsUser.greetings); // fuction