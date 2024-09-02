//new method  getter setter in class

class user{
    constructor(email , password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }


    get password(){
        return this._password.toUpperCase() //ama biju koi access krse tyare value ABC avse
    }

    set password(value){
        this._password = value //value store abc j thse 
    }
}

const saroj = new user("saroj@g.com" , "abc") //object created new keyword constructor call kre
console.log(saroj.email); //SAROJ@G.COM
console.log(saroj.password); //ABC