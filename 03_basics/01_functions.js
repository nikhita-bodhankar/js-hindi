function sayMyName(){
    console.log("Nikki");
    
}
// sayMyName()

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1 , number2){
    //  let result = number1 + number2
    //  console.log("nikki");
     
    //  return result //after result nothing prints but before result it prints
    //  console.log("nikki");
    return number1 + number2
     
}
// console.log(addTwoNumbers(3,5));

addTwoNumbers(3,4)
const result = addTwoNumbers(3,4)

// console.log("Result:", result);

function loginUserMessage(username = "Rani"){
    if(username == undefined){
        console.log("Please enter a username");
        
    }
         return `${username} just logged in`
}
// console.log(loginUserMessage("yash"));
console.log(loginUserMessage("pihu"));


// function calculateCaratPrice(...num1){  //... rest operator
//     return num1
// }
// console.log(calculateCaratPrice(2,3,4));

// function calculateCaratPrice(val1,val2,...num1){  //... rest operator
//     return num1
// }
// console.log(calculateCaratPrice(2,3,4,100));


const user = {
    name:"rrr",
    price: 199
}

function handleAnyObjct(anyObject){
    console.log(`The username is ${anyObject.name} and price is ${anyObject.price}`);
    
}
// console.log(handleAnyObjct(user));

handleAnyObjct({
    name:"rrr",
    price: 199
})

const myNewArray = [100,200,300,400]

function getArray(myArray){
   return myArray[2]
}

console.log(getArray(myNewArray));
console.log(getArray([100,200,300,400]));


