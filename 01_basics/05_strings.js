const name ="Shreya"
const repoCount = 50
/*
console.log(name+repoCount);
console.log(name+repoCount+" HELLO ");// we can add like this also 
// its outdated syntax
// we will use backticks (string interpulation) we make place holders in it 
console.log(`Helo my name is ${name} and my repo count is ${repoCount}`);//${you can inject variable here}
//there is an another way to declare a string that is 
const gameName = new String('SHREYA');
console.log(gameName[0]);
console.log(gameName.__proto__);//output-->{}

console.log(gameName.length);
console.log(gameName.toUpperCase());
*/
const gameName = new String('SHREYA');
console.log(gameName.charAt(3));
console.log(gameName.indexOf('R'));

const newstring = gameName.substring(0,4)// last value will not be included
console.log(newstring);// in substring we can't do negative indexing
 
const anotherString = gameName.slice(-5,3)//last value will not be included//negative indexing and positive indexing both can be done 
console.log(anotherString);

const example = "   HELLO   ";
console.log(example);
console.log(example.trim());//all spaces & newline charracter will be removed
const url ="https://shreya.com/shreya%20sharma"
console.log(url.replace('%20','-'))
console.log(url.includes('shreya'));

const some = "ARRAY-WILL-BE-FORMED-AFTER-SPLITTING";
console.log(some.split('-'));// used to make an array