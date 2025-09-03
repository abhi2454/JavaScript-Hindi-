let score = "33abc"
// let score = "33" --> 33
// let score = "33abc" --> NaN --> Not a Number
// let score = null --> 0
// let score = undefined ----> NaN
// let score = true/false  ----> 1/0    
// let score = "Abhinav"  ----> NaN    


//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)

//console.log(typeof valueInNumber);
//console.log(valueInNumber);

let isLoggedIn = "abhinav"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 or 0 --->  true or false
// "" -----> false
// "abhinav" ----> true


let someNumber = 33
let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);


