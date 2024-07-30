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

function chai(){
     let username = "saroj"
    console.log(this.username); //undefined , bcoz it only works on object
}
chai()

