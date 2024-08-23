const user = {
    username: 'saroj',
    loginCount: 12,
    signedIn: true,

    getUserDetails : function (){
        // console.log("got users detail from database");
        // console.log(`username: ${this.username}`); //this used for current context
        console.log(this); //gives current object
        
        
    }

}

// console.log(user);

// console.log(user.username); //saroj
// console.log(user.getUserDetails()); //username: saroj
// console.log(this); //{}
 

//constructor function = > new keyword = object literal mathi multiple instance mle , nava context banavva kam ave
//constructor => ek navu instance ape k navi copy ape (ema original affect na thay)
// const promiseOne = new Promise()
// const date =  new Date()

function User(username, loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function (){

        console.log(`welcome to ${this.username}`);
        
    }

    return this
}

const userOne = new User("saroj", 10 , true)
const userTwo = new User("chaiaurcode", 11, false)

console.log(userOne.constructor); //khud nu j reference ape function
// console.log(userTwo);



