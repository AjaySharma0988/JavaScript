// forEach loop

// Array in forEach loop
const coding = ["js", "cpp", "ruby", "python", "java"]

// coding.forEach( function(item){
//     console.log(item);
// })

// Aero function in foreach loop
// coding.forEach( (item) => {
//     console.log(item);
// })

function printMe(item) {
    console.log(item);
}

// coding.forEach (printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )
// output js 0 [ 'js', 'cpp', 'ruby', 'python', 'java' ]

const myCoding =[
{
    languageNamme:"javascrept",
    languageFileName:"js"    
},
{
    languageNamme:"javs",
    languageFileName:"java"    
},
{
    languageNamme:"python",
    languageFileName:"py"    
}
]

myCoding.forEach( (itrm) =>{
    console.log(itrm.languageFileName)
} )