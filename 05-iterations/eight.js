//reduce keyword
//accumulator and currentvalue

//for regular function
// const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc , currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)  //acc take value that we have given after {} like 0 and after that it add currval i.e 0+1 =1
      //after that acc will be 1 and currval is 2 and it return 3 and it is go on so

//console.log(myTotal);

//for arrow function
const myNums = [1,2,3]

const myTotal = myNums.reduce( (acc,curr) => acc+curr,0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemname:'js course',
        price: 2999
    },
    {
        itemname:'py course',
        price: 999
    },
    {
        itemname:'mobile dev course',
        price: 5999
    },
    {
        itemname:'data science course',
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price , 0)

console.log(priceToPay); //total sum of items price
