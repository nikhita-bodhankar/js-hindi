const user = {
    username: "nikki",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to Website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "nikki"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username = "nikki" 
//     console.log(this.username);
       
// }

const chai = () => {
    let username = "nikki" 
    console.log(this.username);
       
}

// chai()

// const addTwoNum = (num1 , num2) => {
//        return num1 + num2
// }
// console.log(addTwoNum(1,2));

// const addTwoNum = (num1 , num2) =>  num1 + num2

// const addTwoNum = (num1 , num2) =>  (num1 + num2)

const addTwoNum = (num1 , num2) =>  ({username:"niks"})



console.log(addTwoNum(1,2));
