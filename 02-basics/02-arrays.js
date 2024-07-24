const marvel_heros = ["thor" , "ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros); //['thor' , 'ironman' , 'spiderman' , ['superman' , 'flash' , 'batman']]

//console.log(marvel_heros[3][0]); //superman

// const allHeros = marvel_heros.concat(dc_heros) // combine two or more array and return new array
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros] //2 - spread method => combine or merge 
// console.log(all_new_heros);                             two or more array

                            
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] //[[],[[]]] there are 3 depth
//const real_another_array = another_array.flat(3) //[1,2,3,4,5,6,7,6,7,4,5]

const real_another_array = another_array.flat(Infinity) // [1,2,3,4,5,6,7,6,7,4,5]
console.log(real_another_array);

console.log((Array.isArray("saroj"))); // false
console.log((Array.from("saroj")));//convert a string , object or nodelist into an array form =['s','a','r','o','j']
console.log((Array.from({name : "saroj"}))); // return []empty array // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //[100,200,300]=> return an array from set of element 