// Array spacific loop
// for of 

const arr = [1,2,3,4,5,6,7,8,9]

for (const num of arr) {
    // console.log(`the name is ${num}`);
}

const greating = "Hello Mr Ajay"

for (const great of greating) {
    // console.log(`the greating to ${great}`);
}

// Maps 

const map = new Map()
map.set('IN',"Iandia")
map.set('USa',"United state amarics")
map.set('RS',"Russia")

// console.log(map); 

// for (const key of map) {
//     console.log(key);
// }

//to destructure array
// for (const [key,value] of map) {
//     console.log(key,':-',value);
// }

// objects is not iterable
const myObject = {
    game1:"India",
    game2:"russia",
    game3:"napal"
}
for (const game of myObject) {
    console.log(game);
}
