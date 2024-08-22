const promiseOne = new Promise(function (resolve, reject ) {  //promise creation
    //do an async task
    //DB calls , cryptography , network 
    setTimeout(function(){
        console.log('async task completed');    
        resolve()
    }, 1000)
})

promiseOne.then(function(){                //promise consume
    console.log('promise consumed');
    
})

new Promise(function(resolve , reject){

    setTimeout(function(){
        console.log('async task 2');
        resolve()
    }, 1000)

}).then(function(){
    console.log('async 2 resolved');
    
})

const promiseThree = new Promise(function(resolve, reject){

    setTimeout(function(){
    resolve({username : 'saroj' , email : 'sarojthakor@gmail.com'})
    },1000)

})

promiseThree.then(function(user){
  console.log(user);
  
})

const promiseFour = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = true;
        if (!error) {
           resolve({username: 'saroj', password: '123'})
        } else {
            reject('ERROR: something went wrong')
        }   

    },1000)

})

promiseFour.then((user) => {   //then for resolve & catch for reject 
    console.log(user);
    return user.username

}).then((username) => {

    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log('the promise is either resolved or rejected'))  //finally must executed


//approach 2 => async await

const promiseFive = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = true;
        if (!error) {
           resolve({username: 'javascript', password: '123'})
        } else {
            reject('ERROR: js went wrong')
        }   

    },1000)
    
})

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);   
   }
   
}

consumePromiseFive()


//to get allusers info with the use of try and catch

// async function getAllUser(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json()
//    console.log(data);
   
//    } catch (error) {
//     console.log('E:', error);
    
//    }
    
// }
// getAllUser()

//fetch data with the use of then and catch

fetch('https://api.github.com/users/hiteshchoudhary').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);    
}).catch((error) => {
    console.log(error);
    
})