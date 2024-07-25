//const tinderUser = new Object() // constructor method

//console.log(tinderUser); // {} return empty object 

const tinderUser = {} 

tinderUser.id = "123abc"
tinderUser.name = "saroj"
tinderUser.isLoggedIn = false

//console.log(tinderUser); 

const regularUser = {
    email : "saroj@gmail.com",
    fullname : {
        userfullname : {
            firstname : "saroj",
            lastname : "thakor"
        }
    }

}

//console.log(regularUser.fullname.userfullname.firstname); // saroj

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj4 = {5 : "a", 6 : "b"}

//const obj3 = {obj1 , obj2} //with this method it print object into object 

//const obj3 = Object.assign({},obj1,obj2,obj4) //combine  objects with assign method

const obj3 = {...obj1,...obj2,...obj4} // combine object with spread operator

//console.log(obj3);

const users = [
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 1,
        email : "s@gmail.com"
    }
] //called array of object comes from database

//console.log(users[1].email); //s@gmail.com

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //key returns in array form => ['id','name','isloggedin']
// console.log(Object.values(tinderUser)); //['123abc','saroj',false]
// console.log(Object.entries(tinderUser));// array na andar array i.e. key , value pair array ma

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true

//***************Object DE-Structure**************************************

const course = {
    coursename : "js in hindi",
    price : "999",
    courseinstructor : "saroj"
}

//course.courseinstructor

// const {courseinstructor} = course
// console.log(courseinstructor); // saroj

const {courseinstructor : instructor} = course //De-structuring
console.log(instructor); // saroj

// {
//     name: "saroj",
//     coursename : "js in hindi",
//     price : "999"
// } json format

[
    {},
    {},
    {}
]