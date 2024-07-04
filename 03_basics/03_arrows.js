const user = {
    userName:"Ankit",
    Price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName} wellcome to ower websit`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.userName="Ajay"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Mr Ajay" 
//     // console.log(this);
//     console.log(this.username);//undefined
// }
// chai()

// const chai = function(){
//     let username = "Mr Ajay"
//     console.log(this.username)//undefined
// }
// chai()

const chai = () => { //now it is arrow function
    let username = "Mr Ajay"
    console.log(this.username)//undefined
    console.log(this)//{} empty 
}
//chai()

//() => {} // *basic syntex of arrow function
// const addTwo = (num1, num2) => { //basic arrow function
//     return num1 + num2 //*** if carlybrases use need to use "return"
// }

//const addTwo = (num1, num2) => num1 + num2 //called Implicitly it means that the JavaScript engine handles it automatically without requiring explicit instructions from you.

//const addTwo = (num1, num2) => (num1 + num2)//no require of return

const addTwo = (num1, num2) => ({userName:"Ajay"})//+*+* to return object in arrow function the object must raped it into "()"
//Another symtex of arrow () => ()
console.log(addTwo(6,9))