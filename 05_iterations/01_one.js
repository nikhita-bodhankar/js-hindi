//for loop

// for (let i = 0; i <= 10 ; i++) {
//     const element = i;
//     console.log(element);
    
    
// }

for (let i = 0; i <= 10 ; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best number");
        
    }
    console.log(element);
    
    
    
}


for (let i = 0; i < 10 ; i++) {
    console.log(`outer loop value : ${i}`);
    
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop value : ${j} and outer loop value : ${i}`);
        console.log(+i ,'*', +j ,'=' , +i*j);
        
        
    }
    
}

const myArray = ["splash", "batman","superman"]
for (let index = 0; index < myArray.length; index++) {
    // console.log(myArray.length);
    
    const element = myArray[index];
    // console.log(element);
    
    
}

//break and continue

for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log("5 is detected");
        break
        
    }
    console.log("value of i is ", index);
    
}
for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log("5 is detected");
        continue
        
    }
    console.log("value of i is ", index);
    
}