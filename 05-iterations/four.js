//array ne loop lagadva forof loop use krvu
//object ne loop lagadva forin loop use krvu

const myObject = {
    js : 'javascript',
    cpp : 'c++',
    py : 'python',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
    //console.log(`${key} is shortcut for ${myObject[key]}`);
    //${key} for key , ${myObject[key] for values
}

const programming = ["js","py","rb","cpp"]

for (const key in programming) {
  //console.log(programming[key]); //it gives value of an array 
  
}

// const map = new Map
// map.set('IN', "india")
// map.set('USA',"united states of america")
// map.set('Fr', "france")
// map.set('IN', "india")

// for (const key in map) {
//     console.log(key); //nothing executed because map is not iteratable
    
// }