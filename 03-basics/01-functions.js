// function sayMyName(){
//     console.log("s");
//     console.log("a");
//     console.log("r");
//     console.log("o");
//     console.log("j");
// } //function definition

// sayMyName //reference
// sayMyName() // execution=> s a r o j

//function addTwoNumbers(number1,number2){ //parameter => number1,number2
                                        /*parameter = jyare funnction ni definition banavi
                                        tyare j input lai aene parameter kevay*/
//    console.log(number1+number2);
//}

// addTwoNumbers() // NaN
// addTwoNumbers(3,"4") //34    {/*jyare function ne call karavi tyare j 
// addTwoNumbers(3,null) //3        value pass kri aene argument kevay*/}

function addTwoNumbers(number1,number2){ 
   
    // let result = number1 + number2
    // return result

    return number1+number2
}


const result = addTwoNumbers(3,4) //7 , argument => 3 , 4
//console.log("result:" , result); // output= result:7 , return kri toj (result)variable ma store kri shakiye khali console log thi ny thay

function loginUserMessage(username = "pratik"){
    if (!username) {  //  if(!username) & if(username===undefined) both are same
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("saroj")) // saroj just logged in
//console.log(loginUserMessage()) //please enter a username , &  if there is no value enter then default value will be print
//console.log(loginUserMessage("saroj")) 

// function calculateCartPrice(...num1){//...num1 => rest operator and also called spread operator depends on use
//     return num1                           => rest oper. badhi argument ne 1 array ma pass kre
// }

//console.log(calculateCartPrice(2)); //2
//console.log(calculateCartPrice(200,300,400,2000)) [200,300,400,2000]

function calculateCartPrice(val1 , val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200,300,400,2000)) //[400,2000] bcoz first two value given to val1 and val2


/**********object passed in function********/

const user = {
    username : "saroj",
    price : "200"
}

function handleObject(anyobject){ 

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user) //username is saroj and price is 200

handleObject({ // we can direct pass object
    username : "pratik",
    price : 399
})

/********************array passed in function */

const myNewArray = [100,200,300,400]

function returnSecondValue(getarray){
    return getarray[1]
}

console.log(returnSecondValue(myNewArray)); //200
console.log(returnSecondValue([100,200,300,400])) //200 we can direct pass an array