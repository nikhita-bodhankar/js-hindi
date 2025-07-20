// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025,0,25)
// let myCreatedDate = new Date(2025,0,25,5,3)
// let myCreatedDate = new Date("2025-01-24")
let myCreatedDate = new Date("01-24-2025")


// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp.toString());
// console.log(myCreatedDate.getTime());
// console.log(Date.now(Math.floor)/1000);

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(`${newDate.getMonth()} is current date`);
console.log(newDate.toLocaleString('default',{
    weekday: "long"
    
}));












