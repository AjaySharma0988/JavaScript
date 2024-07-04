function sayMyName(){
    console.log("A");
    console.log("J");
    console.log("A");
    console.log("Y");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(7, 5)

//console.log("Result: ", result);

function loginUserMessage(username){
//function loginUserMessage(username = "NuU"){//can give default value by this syntex and if you give a name the default value will gate owerwrightin
    // if(username === undefined){
    if(!username){
        console.log("please enter a username")
        return
    }
return `${username} just logged in`
}

//console.log(loginUserMessage("Mr Ajay"))

function calculateCartPrice(...numb1){//"..." it is also called rest and spread oprater
return numb1
}
//console.log(calculateCartPrice(100,200,300));

const user = {
    userName :"Mr Ajay",
    Price : 200
}

function handleObject(anyObject){
    console.log(`userName is ${anyObject.userName} and Price  ${anyObject.Price}`)
}

handleObject({
    userName:"ajay",
    Price:1000000
})

const myNewArray = [100, 200, 300, 400, 500]

function handleArray(anyArray){
    //console.log(anyArray[2])
    return anyArray[3]
}
//handleArray(myNewArray)
console.log(handleArray(myNewArray)); 