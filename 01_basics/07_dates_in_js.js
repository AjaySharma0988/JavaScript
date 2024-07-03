// Dates

let myDate = new Date()
// console.log(myDate) // 2024-07-03T11:15:09.470Z
// console.log(myDate.toString()) // Wed Jul 03 2024 11:15:09 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) // Wed Jul 03 2024
// console.log(myDate.toISOString()) // 2024-07-03T11:11:23.864Z
// console.log(myDate.toJSON()) // 2024-07-03T11:11:23.864Z
// console.log(myDate.toLocaleString()) // 7/3/2024, 11:11:23 AM
// console.log(myDate.toLocaleDateString()) // 7/3/2024
//console.log(typeof myDate)

// for creating your own date
let myCreatedDate = new Date(2004, 0, 24)
// let myCreatedDate = new Date(2004, 0, 24,5,3)
// let myCreatedDate = new Date("2004-01-24")
// let myCreatedDate = new Date("04-24-2004") // used in india
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
//console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

//imp
newDate.toLocaleString('default',{
    weekday:"long"
})