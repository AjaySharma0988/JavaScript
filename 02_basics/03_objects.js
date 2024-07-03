//singleyion* // in 04_objects.js fole
//object.create*

// object literals
const mysym = Symbol("key1")//need to study*
const JsUser = {
    name:"ajay",
    "full Name":"ajay sharma",
    age:20,
    [mysym] : "mykey1", 
    location:"hariyana",
    email:"ajay@gmail.com",
    isLoggedIn:false,
    lastLogindays:["monday","tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mysym]);

JsUser.email = "supriya@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "ajuu@gmail.com"
//console.log(JsUser)

// function
JsUser.greating = function(){
    console.log("hello js user")
}
JsUser.greatingtwo = function(){ // imp**
    console.log(`hello js user ${this.name}`)
}

console.log(JsUser.greating())
console.log(JsUser.greatingtwo())