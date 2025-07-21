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

