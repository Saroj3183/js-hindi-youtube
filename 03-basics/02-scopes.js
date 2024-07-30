// let a = 10
// const b = 20
// var c = 30

//{} // called scope of function and if..else statement 

//var c = 300 
let a = 300


if (true) {
    let a = 10
    const b = 20
    var c = 30
    //console.log("INNER:", a); //inner: 10

}

//console.log(a); //output =block scope value a is not defined ,, after declare let 300 in global scope it gives output 300
//console.log(b);//output = b is not defined
//console.log(c); // 30 , if we declare var 300 in global scope it gives output 30


function one() { // scope na andar nu e baar print na karavi shaki pn baar nu andar print kari shaki
    const username = "saroj"

    function two() {
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website); print ny thay kmk andar thi baar avyu atle

    two()
}
 one()

 //nested fun => child (fun. two) function parent(fun. one) k variable ko access kr shakte he

 if (true) {
    const username = "saroj"
    
    if (username=== "saroj") { // we can right true or username === "saroj"
        const website = " youtube"
        //console.log(username + website);
    }
    // console.log(website); scope ni bahar chhe mate print ny thay
 }
//  console.log(username); scope ni baar chhe to print ny thay

//++++++++++++++++++++++++++++  Interesting ++++++++++++++++++++++++++++++++++++++


console.log(addOne(5)); //6
function addOne(num){
    return num + 1

}

addTwo(5) // it gives error bcoz function k sath variable me store kiya 
const addTwo = function(num){
    return num + 2
}
