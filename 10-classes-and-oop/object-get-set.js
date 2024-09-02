//getter setter with object

const user = {
    _email : "saroj@gmail.com",
    _password : "saroj",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },

    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value
    }
}

const saroj = Object.create(user)
console.log(saroj.email); //SAROJ@GMAIL.COM
console.log(saroj.password); // SAROJ