// object in forin loop
const myObject = {
    js:"javascreapt",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
} 
for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is ${myObject[key]}`);
}

//array in forin loop
const planguage = ["js","c++","ruby","java"]
for (const key in planguage) {
    // console.log(planguage[key]);
}

//map in forin loop is not iterable
const map = new Map()
map.set('IN',"Iandia")
map.set('USa',"United state amarics")
map.set('RS',"Russia")

for (const key in map) {
    console.log(key);
}