//descriptorproperty in js

const descreptor = Object.getOwnPropertyDescriptor(Math ,"PI")

// console.log(descreptor); 
//output:
//{
//     value: 3.141592653589793,
//     writable: false,  => jo true value ave to apde e value badli shake ne false ave to na badli shaki i.e false=> value ne overwrite na kri shaki
//     enumerable: false,
//     configurable: false
//   }



// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name : "ginger chai",
    price : 250,
    isAvailable : true,

    orderChai : function(){
        console.log("chai nhi bni");
         
    }
}

console.log(Object.getOwnPropertyDescriptor(chai , "name"));  // { value: 'ginger chai',  writable: true, enumerable: true, configurable: true}

Object.defineProperty(chai , "name", {
    // writable : false,
    enumerable : false // false hovathi name pr loop lagse ny 
})

console.log(Object.getOwnPropertyDescriptor(chai , "name")); // { value: 'ginger chai',  writable: false, enumerable: false, configurable: true}


for (const [key , value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`); //it didnt print that function 
    }
    
}