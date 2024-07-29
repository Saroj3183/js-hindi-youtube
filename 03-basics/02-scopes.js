// let a = 10
// const b = 20
// var c = 30

//{} // called scope of function and if..else statement 

//var c = 300 
let a = 300


if (true) {
    let a =10
    const b = 20
    var c = 30
    console.log("INNER:", a); //inner: 10
    
}

console.log(a); //output =block scope value a is not defined ,, after declare let 300 in global scope it gives output 300
//console.log(b);//output = b is not defined
//console.log(c); // 30 , if we declare var 300 in global scope it gives output 30