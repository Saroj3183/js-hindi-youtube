//Immediately Invoke Function Expression(IIFE)

(function chai() { //called named iife

    console.log(`DB CONNECTED`);      //output = DB CONNECTED
})();                               //we had to put semi colon to end run code 

//()() => first () for function definition & second for execution

//iife used to immediate function executuion 
// global scope k pollution se problem hoti he kai bar to global scope k varible ko hatane k liye iife used
//iife keeps variables and function private in it

// Arrow function

( (name) => { //called unnamed iife

    console.log(`DB CONNECTED TWO ${name}`);
})("saroj") //DB CONNECTED TWO saroj
