// singletone or declaire with the help of constructer
// to declair two symtex
//const tinderUser = new Object()
const tinderUser = {}
tinderUser.Id = "1234"
tinderUser.name ="ajay"
tinderUser.isLoggin = false
//console.log(tinderUser);

const regularUser ={
        email:"akash@gmail.com",
        fullName:{
            userfullName:{
                FirstName : "akash",
                LastName :"sharma"
            }
        }
}

//console.log(regularUser.fullName.userfullName.FirstName);

//murge/combine the object
const obj1 = {1:"a", 2:"b"}
const obj2 = {4:"t", 8:"i"}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2) //in less use

const obj3 = {...obj1,...obj2} //spread best to use for combining 90%
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
//console.log(tinderUser);

// console.log(Object.keys(tinderUser));//[ 'Id', 'name', 'isLoggin' ]
// console.log(Object.values(tinderUser));//[ '1234', 'ajay', false ]
// console.log(Object.entries(tinderUser));//[ [ 'Id', '1234' ], [ 'name', 'ajay' ], [ 'isLoggin', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//to ask if it has the proparty
    
// Destructureing
const cource = {
            courceName:"coding wirh coder",
            price : 999,
            courceInstructer:"ajay"

}

// cource.courceInstructer
// instade of this can use

const {courceInstructer: instructer} = cource
console.log(instructer);
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]