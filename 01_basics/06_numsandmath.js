/*
const score = 400//automatically type is number
console.log(score)


const balance = new Number(100)//explicitly type is 100
console.log(balance);

console.log(balance.toString().length);//type changed to string --> then we can use string function on it like concancate length etc.
console.log(balance.toFixed(2));//100.00

const n = 23.9855 //235.978//1223.78
console.log(n.toPrecision(3));
const n1 = 10000000;
console.log(n1.toLocaleString())//US Standard num as output
console.log(n1.toLocaleString('en-IN'))//INDIAN Standard Output
*/
//*********************MATHS*****************// 
console.log(Math);
console.log(Math.abs(-4));// you can give +ve value also
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.min(4,9,7,3,1));
console.log(Math.max(4,9,7,2,5,1));
console.log(Math.random());//range-->0-1
//if we want range b/w particular nums
console.log((Math.random()*10)+1);//it will avoid 0
console.log(Math.floor((Math.random()*10)+1));//for single no. as output
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)// it will give ans b/w 10 to 20
