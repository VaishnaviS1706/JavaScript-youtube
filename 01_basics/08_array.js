/*const myArr =[0,1,2,3,4,5]
const myArr2 =[0,1,2,3,4,5,true,"Shreya"]//its also array 
const myHeros =["Ironman","BlackWidow"]
console.log(myArr[2]);

//Array Methods
myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.pop()//last ele will be deleted
myArr.pop(1)//2nd last ele will be deleted even if you specify a no. or index
console.log(myArr);

//myArr.unshift(9)//used to add value at 0th index
//myArr.shift()//9 deleted//ele get deleted at 0th index
console.log(myArr.includes(9));//return false
console.log(myArr.indexOf(19));//return -1 means does not exist
console.log(myArr.indexOf(1));//return -1 means does not exist
const newArr = myArr.join()
console.log(myArr);
console.log(newArr); //output is in string type
console.log(typeOf (newArr))//string

//slice,splice
console.log("A",myArr);
const myn1 = myArr.slice(1,3)//does not manipulates original array

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)//manipulates original array
console.log("C",myArr);//[0,4,5]//array changed
console.log(myn2);//[1,2,3] */

//---------------------2nd part--------------------
const marvelHeros= ["Thor","Ironman","Spiderman"]
const dcHeros= ["Flash","Batman","Superman"]
// marvelHeros.push(dcHeros);
// console.log(marvelHeros);//nested array aa jaiga//dcHeros acted as 4th ele
// console.log(marvelHeros[3][1]);//to access batman
// marvelHeros.concat(dcHeros);
// console.log(marvelHeros);//same output as before
const allHeros =marvelHeros.concat(dcHeros);//now this works fine it creates a new combined array
console.log(allHeros);
//----OR YOU CAN USE SPREAD OPERATOR-----------
const allnew =[...marvelHeros,...dcHeros];//new array formed
console.log(allnew);

const anotherArray =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArray=anotherArray.flat(Infinity)//automatically sarri values spread ho gayi hain

console.log(realArray);
//-----HOW TO MAKE ARRAY-----??
console.log(Array.isArray("hello"))//false
console.log(Array.from("hello"))//return array of hello
console.log(Array.from({name:"Shreya"}))//it will give empty ARRAY cant form array from this
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));// return a new array 
