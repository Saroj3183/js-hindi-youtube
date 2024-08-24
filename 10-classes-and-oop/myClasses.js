//ES6

class user {
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password

    }

    encryptPassword(){
        console.log(`${this.password}abc`);
        
    }

    changeUsername(){
        console.log(`${this.username.toUpperCase()}`);
        
    }
}

const chai = new user("chai" , "chai@google.com" , "123")

chai.changeUsername()
chai.encryptPassword()

//behind the scene

function user(username , email , password){
    this.username = username;
    this.email = email;
    this.password = password

}

//bcoz user func behave like object so we can use prototype in it

const tea = new user("tea" ,"tea@gmail.com" , "123")

user.prototype.encryptPassword = function(){
    console.log(`${this.password}abc`);
    
}
user.prototype.changeUsername = function(){
    console.log(`${this.username.toUpperCase()}`);
    
}

tea.changeUsername()
tea.encryptPassword()

