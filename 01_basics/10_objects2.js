//Objects ko singelton kaisa kar skte hain {via constructors help}
//const tinderUser = new Object() //its a singleton object 
const tinderUser ={}//its a non-singleton object
console.log(tinderUser);
//OUTPUT of both will be same as empty object {}

//ADDING ELEMENTS

tinderUser.id ="123abc"
tinderUser.name ="SAM"
tinderUser.isLoggedIn = false
//NESTING OF OBJECTS CAN ALSO BE DONE
const regularUser ={
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
           firstname:"shreya",
           secondname:"sharma"
        }
    }
}
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname);
//WE CAN COMBINE OBJECTS ALSO
const obj1 ={1:"a",2:"b"}//target
const obj2 ={3:"a",4:"b"}//merge
//const obj3 ={obj1,obj2}//nested object will return 
//const obj3 =Object.assign(obj1,obj2)//a new merged object will return target ma souce merge ho gaya
//const obj3 =Object.assign({},obj1,obj2)//{} its optional all the sources will be merged in this
//WHAT WE WILL USE IS SPREAD OPERATOR AS IN ARRAY
const obj3={...obj1,...obj2}
console.log(obj3);
const users=[
    {
        id:1,
        email:"anc@gmail.com"
    },
    {
        id:2,
        email:"anc@gmail.com"
    },
    {
        id:3,
        email:"anc@gmail.com"
    },
    {
        id:4,
        email:"anc@gmail.com"
    },
]
console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));//
console.log(Object.values(tinderUser));// THESE FUNCTION WILLRETURN ARRAY OF KEYS VALUES N PAIRS 
console.log(Object.entries(tinderUser));//
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//t or f