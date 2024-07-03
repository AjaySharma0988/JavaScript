const marvel_heros = ["ironman", "spiderman", "thor"]
const dc_heros = ["superma", "batman", "flash"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);

// const newHerows = marvel_heros.concat(dc_heros)
// console.log(newHerows);
//           OR
const  allNewHerows = [...dc_heros, ...marvel_heros] // best one called spread brakes array into individusl element and cobine it in a new array
//console.log(allNewHerows)

// not mostly used but helpfull
const anotherArray = [1, 2, 3, [6, 3], 8,[9, [7, 4]]]
//const usableArray = anotherArray.flat(Infinity)
//console.log(usableArray)


console.log(Array.isArray("ajay"))
console.log(Array.from("ajay"))
console.log(Array.from({name:"ajaysharma"})) // instresting *

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))