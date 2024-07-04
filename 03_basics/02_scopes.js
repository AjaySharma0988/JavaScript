let a = 300
if(true){
    let a = 12
    const b =23
    var c = 34
    //console.log("Inner:",a);
}//"{}" carlybrases are called scope of a block in if else statment

//console.log(a);
// console.log(b);
//console.log(c);


function one(){
    const userName = "ajay"
        
    function two(){
        const websit = "youtube"
        console.log(userName);
    }
    //console.log(websit)
    //two()
}
one()

if(true){
    const UserHead = "Arjun"

    if (UserHead === "Arjun") {
        const webSit =" youthybee"
        //console.log(UserHead + webSit);
    }
    //console.log(webSit);
}
//console.log(UserHead);

//******************** intrusting ******************

console.log(addone(5))//can be posible
function addone(num){
    return num + 1
}
addtwo(5)// err  "Cannot access 'addtwo' before initialization"
const addtwo = function (num){
    return num + 2
}


//console.log(addtwo(5))