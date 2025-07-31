// const userEmail = "n@gmail.com"
// const userEmail = ""
const userEmail = []


if(userEmail){
    console.log("got user email");
    
}else{
    console.log("Dont have user email");
    
}

//falsy values
//false, 0, -0, BigInt 0n, null, undefined, NaN , ""

//truthy values
// "0" , 'false', " ", [], {} , function(){}

if(userEmail.length ==0 ){
    console.log("array is empty");
    
}

const emptyObject = {}
if(Object.keys(emptyObject).length==0){
    console.log("object is empty");
    
}

//nullish coalescing operator (??) 

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

//Terniary operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("greater than 80"): console.log("less than 80");


