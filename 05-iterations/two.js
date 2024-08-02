//while

let index = 0 //initialization
while (index <= 10) { //condition
    //console.log(`value of index is ${index}`);
    index = index + 2  //increment
}

let myArray = ["flash","shaktiman","batman"]
let arr = 0

while (arr< myArray.length) {
    //console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
}

//do while = it print at least one statement after check condition and increment it 

let score = 12

do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);