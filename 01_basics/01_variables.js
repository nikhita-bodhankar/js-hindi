const accountId = 144553
let accountEmail = "nikhita@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountID =2 //not allowed

console.log(accountId); 

accountEmail = "yash@gmail.com"
accountPassword = "2323"
accountCity = "bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


/*
   Prefer not to use var 
   because of isuue in block scope and functional scope
*/