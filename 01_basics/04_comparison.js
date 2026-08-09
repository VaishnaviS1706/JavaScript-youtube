/*
console.log("02">1);
console.log("2">1);// automatic convert string to num

console.log(null>0);//equailty operator and comparison operator work differently on java script
console.log(null>=0);
console.log(null==0);

console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined>0);
*/
// console("2"===2); // will throw error as === represents strict check it will check datatype


/*JavaScript is a dynamically typed language.
This means that the JavaScript interpreter assigns data types to variables at runtime 
based on the variable's value at that exact moment, 
rather than requiring you to define the type beforehand.*/ 

const id = Symbol('123')
const anotherid = Symbol('123')
const outsideTemp = null;
console.log(id==anotherid);//ans is false

const bigNumber = 46454864859324546455n // it will store as bigInt

// ARRAY(refrence type)
const heros =["naagraj","doga","shaktiman"];

//OBJECTS are declared using { } 
let myobj = {
    name:"Shreya",
    age: 22,
}
//FUNCTION 
const myFunction = function(){
    console.log(" HELLO WORLD !");
} 
console.log(typeof bigNumber);
console.log(typeof outsideTemp); // null--->object datatype
console.log(typeof myFunction);