// Immediately Invoked function Expressions (IIFE)
//  It is a common design pattern used to avoid polluting the global scope and to create a private scope for variables.

(function car (){
    //also known as Named IIFE
    console.log(`DB CONNECTED`);      
})(); // ()(); need to give ";" before using another iife function
       // ()()

( (name) => {
    console.log(`DB CONNECTED Two ${name}`);
})("Mr Ajay") 