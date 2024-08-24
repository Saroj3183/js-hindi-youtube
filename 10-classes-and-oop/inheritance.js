class user{
    constructor(username){
        this.username = username;
        
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
        
    }
}

class teacher extends user{

    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password
    }

    addCource(){
        console.log(`a new cource added by ${this.username}`);
        
    }

}

const chai = new teacher("chai", "chai@gmail.com" , "123")

chai.addCource() // a new cource added by chai
// chai.logMe() //USERNAME IS chai

const masalaChai = new user("masalaChai")

// masalaChai.addCource() // dont have access of addcource
masalaChai.logMe() // USERNAME IS masalaChai

console.log(chai === masalaChai); //false
// console.log(chai === teacher); //false
console.log(chai instanceof teacher); //true chai is instance of teacher
console.log(chai instanceof user); //true
console.log(masalaChai instanceof teacher); //false
console.log(masalaChai instanceof user);//true

