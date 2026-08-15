//singleton formed using constructors
//constructors sa jo banega ----->singleton
//Object.create
//literals sa jo banega --------->not singleton

//object literals
const mySym = Symbol("key1")
//HOW TO DECLARE OR USE SYMBOL AS A KEY
const JsUser = {
    name: "Shreya",//here name is string type(key)
    "full name":"Shreya Sharma",   
    age: 18,
    [mySym]:"key1",//syntax is like this
    location: "Jaipur",
    email:"abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email);//not a good way to access

console.log(JsUser["email"]);
//why not a good way to access

//console.log(JsUser.full name);//it will show error now u can't use dot method

console.log(JsUser["full name"]);//this is the correct way to use []square method

console.log(JsUser[mySym]);//print like this

JsUser.email="hfiui@gmail.com"//you can update value like this

//Object.freeze(JsUser)//no changes can occur now

JsUser.email="pqr@gmail.com"//it will not throw any error but also value will nt be changed
console.log(JsUser);
//WE CAN ALSO ADD FUNCTION IN OUR OBJECT JsUser
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);//this is how u take refrence of name 
}
//AFTER freeze these will not work comment out it
console.log(JsUser.greeting)//[Function (anonymous)] output function execute nahi hota hai aisa uska refrence atta hai
console.log(JsUser.greeting())//undefined as output
console.log(JsUser.greetingTwo())//undefined as output
