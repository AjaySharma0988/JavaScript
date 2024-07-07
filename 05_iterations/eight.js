const myNums = [1,2,3,4]

// const myTotal = myNums.reduce( function (acc,currval) {
//     console.log(`acc ${acc} and courrval ${currval}`);
//     return acc + currval
// }, 0)

//const myTotal = myNums.reduce( (acc, currval) => acc + currval ,0)
// console.log(myTotal);

const shopingCart =[
{
    courceName:"ja cource",
    price:100
},
{
    courceName:"java",
    price:100
},
{
    courceName:"cpp",
    price:100
},
]

const mytotle = shopingCart.reduce( (acc, item) => acc + item.price,0)
console.log(mytotle);