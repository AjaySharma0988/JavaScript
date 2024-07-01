const accountId = 1234567
let accountEmail ="ajay@gmail.com"
var accountPassword ="1234"
accountCity = "hariyana"
let accountState;

// accountId = 2 not alloud
accountEmail ="ajaysharma@gamil.com"
accountPassword ="7898"
accountCity ="chhatisgarh"

/*
preffer not to use var 
because of issue in block scope and functional scope
*/

// console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])