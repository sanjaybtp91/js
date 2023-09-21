// const tinderUser = new Object()  // constructor ki help se singalton object banana
const tinderUser = {}                  // non singalton object

tinderUser.id = "154abc"
tinderUser.name = "vijay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);    

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  // values ko access karna

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  // join ki jagah object ke ander object ho jayga
// const obj3 = Object.assign({}, obj1, obj2, obj4)   // ek nye object me assingn karna

const obj3 = {...obj1, ...obj2}                     // spread method obj 3mein 1 and 2 ko spread karna
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));        // tinderuser ki sari keys dedo
// console.log(Object.values(tinderUser));      // tinder user ki values dedo
// console.log(Object.entries(tinderUser));     //key values ke pair mein array 

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // puchhna kya tinder user par isloggedin proprty hai


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor                         //values ko destructure karna

const {courseInstructor: instructor} = course  // kahan se kya value extract karni hai

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }



[
    {},
    {},
    {}
]