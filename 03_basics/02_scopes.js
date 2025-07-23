var c = 300
let a = 400

if(true) {
 let a = 10;
//  console.log("Inner:",a);
 
//  const b = 20;
 var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);


// function one(){
//     const username = "nikki"
//     function two(){
//         const website = "youtube"
//         console.log(username);    
//     }
//     // console.log(website);
//     two()
// }
// one()

if(true){
    const username = "rani"
    if(username === "rani"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
  }
// console.log(username);

//+++++++++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5)); // can access

function addOne(num){
    return num + 1
}
// console.log(addOne(5));




console.log(addTwo(5)); // can not access 
const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(5));






