const myArr =[0,1,2,3,4,5]
const myArr2 =[0,1,2,3,4,5,true,"Shreya"]//its also array 
const myHeros =["Ironman","BlackWidow"]
/*console.log(myArr[2]);

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
*/
//slice,splice
console.log("A",myArr);
const myn1 = myArr.slice(1,3)//does not manipulates original array

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)//manipulates original array
console.log("C",myArr);//[0,4,5]//array changed
console.log(myn2);//[1,2,3]