//object literals
const mySym = Symbol("key1")

const jsUser = {
    name : "nikki",
    [mySym] : "myKey1",
    "full name":"nikhita bodhankar",
    age : 24,
    location : "Nagpur",
    email : "nikhitabodhankar@gmail.com",
    isLoggedIn : false,
    lastLoggedDays : ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

// console.log(jsUser[mySym]);

// jsUser.email = "rani123@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "yash@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello jsuser");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user ${this["full name"]}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());






