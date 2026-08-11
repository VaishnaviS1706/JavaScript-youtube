//Dates
/*
let myDATE = new Date()
console.log(myDATE);
console.log(myDATE.toDateString());
console.log(myDATE.toJSON());
console.log(myDATE.toTimeString());
console.log(myDATE.toISOString());
console.log(myDATE.toUTCString());
console.log(myDATE.toLocaleTimeString());
console.log(myDATE.toLocaleDateString());
console.log(myDATE.toLocaleString());

console.log(myDATE.toString());
*//*
console.log(typeof myDATE);//type --> object 
let myCreatedDate = new Date(2026,0,14)// IN JAVASCRIPT MONTH START FROM 0
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
*/
// IF YOU WANT TO DECLARE A DATE IN TYPE OF (YYYY-MM-DD)
let newDate = new Date("2026-01-23")// IN INDIA WE DONT FOLLOW THIS WE FOLLOW DD-MM-YYYY
console.log(newDate.toLocaleString());
console.log(newDate);
let myTimeStamp = Date.now()
console.log(myTimeStamp);// it will give ans in ms from thw date given on mdn 1970 1st jan something
console.log(newDate.getTime())

// if want to have time in mins then
console.log(Math.floor(Date.now()/1000));// math.floor bec we dont want ans in decimal
// some more funcs of date
let date1 = new Date()
console.log(date1);
console.log(date1.getMonth()+1);//month starts from 0 thats why + 1
console.log(date1.getDay());

// we can customize date also 
date1.toLocaleDateString('default',{
    weekday: "long"// use ctrl+space
})