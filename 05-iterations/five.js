//foreach

const coding = ["js","java","ruby","python","cpp"]

// coding.forEach( function (val){           //callback fun add krvanu nam vagar nu
      //console.log(val);
    
// })

// coding.forEach( (item) => { // add arrow function as callback fun.
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);    

// }

// coding.forEach(printMe) //we have to add reference of function to print values

// coding.forEach( (items, index , arr) => { // we can add more than one paramerets like index , arr
//     console.log(items,index,arr);
    
// })

const myCoding = [ //array na andar object ma value nu access krva foreach loop use thay bv usefull chhe
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName); // we can access filename,languagename from array of object 
    
})