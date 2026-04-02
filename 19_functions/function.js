// function sum (a,b){
//     let add = (a+b)
//     return add
// }

// console.log(sum(5,8));

// // normal function 
// function add(a, b) {
//     return a + b;
// }

// // arrow function 
// const add = (a, b) => {
//     return a + b;
// };


// rest operator
// function calculateCartPrice(...item1){
//     return item1
// }

// console.log(calculateCartPrice(500, 700, 800))

//-----------passing an object in function

const user = {
    username : "sammi azaz",
    age : 22
}
function objectinfunction(object){
    console.log(`username is ${object.username} and age is ${object.age}`)
}

objectinfunction(user)

//-------------passing array in object-------
const arr = [40, 60, 500]

function ArrayinFunction(array){
    return array[0]
}
console.log(ArrayinFunction(arr));
