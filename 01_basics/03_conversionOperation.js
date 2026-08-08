let score = true // check for 33 , "33abc" , null ,undefined ,true(boolean)
console.log(typeof score);
console.log(typeof (score));
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // it will return NaN if we give input "33abc" which can't be converted into number

// 1= true; 0= false ; " "=false ;" shreya "=true
let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
let somenum =33
let num = String(somenum);
console.log(num);
console.log(typeof num);
