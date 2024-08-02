//for of

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
    
}

const greetings = "hello world!"

for (const greet of greetings) {
    //console.log(`each char is ${greet}`);
    
}

//map => like object it stores unique value but if we add same value  it still execute it only once
//map cant store  duplicate value

const map = new Map
map.set('IN', "india")
map.set('USA',"united states of america")
map.set('Fr', "france")
map.set('IN', "india")

//console.log(map);
//forof loop for map

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

//forof loop didn't work on object  it gives an error

const myObject = {
    game1 : "ff",
    game2 : "nfs"
}

for (const [key,value] of myObject) {
    //console.log(key, ':-', value);
    
}