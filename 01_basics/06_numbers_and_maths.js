//***************Number****************
const score = 400
// console.log(score)

const balance = new Number(500) // spacely cast and can see/use proparties
// console.log(balance)
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 22.8456
// console.log(otherNumber.toPrecision(2))// round of number

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-in'))// help to apply "," in number 10,00,000

//******************Maths****************

// console.log(Math);
// console.log(Math.abs(-57)) // converts the nagitive values into positives
// console.log(Math.round(3.6)) // round of the values
// console.log(Math.ceil(4.2)) // takes upper values
// console.log(Math.floor(4.6)) // takes lower valuer
// console.log(Math.min(4, 3, 7, 9)) // to find the minimum value in a array
// console.log(Math.max(4, 3, 7, 9)) // to find the max value in array

// mostly in use
// console.log(Math.random())
console.log((Math.random()*10)+1) // use '*10' for moving the number forword and use '+1' so that the answer should not be 0
console.log(Math.floor(Math.random()*10)+1) // 

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1))+min)
