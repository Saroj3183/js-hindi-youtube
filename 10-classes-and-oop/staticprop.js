class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is: ${this.username}`);
        
    }

    static createId(){ //static keyword dont allow to access createId property
        return `123`
    }

}

const saroj = new user("saroj")

// saroj.logMe() //username is saroj
// console.log(saroj.createId()) 

class teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }


}

const iphone  = new teacher("iphone" , "iphone@gmail.com")
// iphone.logMe() //username is iphone
console.log(iphone.createId())//  it cant access createid property 