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

//() => {} // *basic stuctuer of arrow function
// const addTwo = (num1, num2) => { //basic arrow function
//     return num1 + num2
// }

const addTwo = (num1, num2) => (return num1 + num2)//called 
console.log(addTwo(6,9))