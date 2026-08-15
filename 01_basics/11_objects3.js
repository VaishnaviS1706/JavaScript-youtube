const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Shreya"
}
//to access values
//course.courseInstructor
//another syntax
const{courseInstructor}=course
console.log(courseInstructor)
//---------OR//this method is known as destructure of object
const{courseInstructor:instructor}=course
console.log(instructor)//now you can use name as instructor to access

// {
//     name:"Shreya",
//     coursename:"js in hindi"
// }