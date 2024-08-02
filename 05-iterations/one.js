//for 

for (let i = 0; i <= 10; i++) { // print number 1 to 10
    const element = i;
   //console.log(element);
    
}

//if condition inside for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
        //console.log("5 is best number");    
    }
    //console.log(element);    
    
}

//for loop inside for loop

for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop value ${i}`);

    for (let j = 1; j <= 10; j++) {
       // console.log(`inner loop value ${j} and inner loop ${i}`);   
       //console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

let myArray = ["flash", "batman" , "shaktiman"]
//console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {

    const element = myArray[i];
    //console.log(element);
    
}

//Switch and continue

for (let index = 1; index <= 20; index++) {
    if (index ==5) {
        //console.log(`5 is detected`);
        break  //after break i is out from block scope it didnt print after 5
    }
    //console.log(`value of i is ${index}`);
    
}


for (let index = 1; index <= 20; index++) {
    if (index ==5) {
        console.log(`5 is detected`);
        continue  //in continue after 5 it continue execute numbers
    }
    console.log(`value of i is ${index}`);
    
}