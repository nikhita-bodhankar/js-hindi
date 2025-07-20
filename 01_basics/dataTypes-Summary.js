// Primitive 7 types
// number, string, null, undefined, bigInt, symbol, boolean

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);
console.log(id == anotherId);

const bigNumber = 12345678910n

//Reference (Non-primitve)
//  Array, objects, Functions 

const heros = ["Shaktiman", "Doga", "Naagraj"]
let myObj = {
    name: "Nikki",
    age: 24
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(heros, myObj);
console.log(typeof bigNumber);
console.log(typeof id);
console.log(typeof scoreValue);










