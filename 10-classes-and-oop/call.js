function setUsername(username){

    this.username = username
    console.log("called");
    
}

function createUser(username , emailid , password) {
    setUsername.call(this,username) //setusername this keyword will be disapeared so we have to use this keyword for createuser fun(for current context).
                                    //.call is used  to hold reference of setusername func.

    this.emailid = emailid
    this.password = password
}

const chai = new createUser("chai" , "chai@fb.com" , "123")

console.log(chai);
