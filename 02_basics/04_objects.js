//singleton object
const tinderUser = new Object();
 
//non-singleton object
const tinderUser1 = {}
// console.log(tinderUser1);

tinderUser.id = "123"
tinderUser.name = "nikki"
tinderUser.isLoggedIn = false
console.log(tinderUser);


const regularUser = {
    name: "nikki",
    fullname: {
        name: "Rahul",
        Surname : "Shastri"
    },
    age: 24
}
// console.log(regularUser);
// console.log(regularUser.fullname.name);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        name: "niks",
        email:"niks@123"
    },
    {

    },
    {

    }
]

console.log(users);
users[1].email

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(Object.hasOwnProperty('isLoggedIn'));





