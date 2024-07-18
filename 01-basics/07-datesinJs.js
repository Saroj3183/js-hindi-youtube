// Dates

// let myDate = new Date()
// console.log(myDate);  // 2024-07-18T14:37:08.802Z
// console.log(myDate.toString()); // thu jul 18 2024 14:28:42 GMT+0000 => show date and time in string
// console.log(myDate.toDateString()); // thu jul 18 2024 => show only date in string
// console.log(myDate.toTimeString()); // 14:37:08 GMT+0000 => show time 
// console.log(myDate.toLocaleString()); // 7/18/2024 , 2:28:42 pm => add comma (,) 
// console.log(myDate.toISOString()); //  2024-07018T14:37:08802Z
// console.log(myDate.toLocaleDateString()); // 7/18/2024
// console.log(myDate.toLocaleTimeString()); //  2:37:08 pm

// console.log(typeof myDate); //object

//let myCreatedDate = new Date(2024, 6 , 18) // 2024-07-18
//let myCreatedDate = new Date(2024, 6 , 18 , 8 , 31) // 7/18/2024 , 8:31:00 AM
//let myCreatedDate = new Date("2024-01-13") // 1/13/2024
let myCreatedDate = new Date("01-13-2024") // 1/13/2024
//console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()
// console.log(myTimeStamp); //1721316255159 time in mili seconds
// console.log(myCreatedDate.getTime()); //exect value from 1st jan 1970
// console.log(Math.floor(Date.now()/1000)); //=> convert miliseconds to seconds


let newDate = new Date()
console.log(newDate); 
console.log(newDate.getMonth()); // 6 => 6+1 => 7 (july)
console.log(newDate.getDay());  // 4 + 1 => 5 (thursday)
console.log(newDate.getFullYear());  //2024

//`${newDate.getDay()} and time is`

newDate.toLocaleString('default' , { //not understood ;)
    weekday: "long",
})