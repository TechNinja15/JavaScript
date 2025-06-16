const accountId = 144553
let accountEmail = "akj@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"  //it is not a good way to store a variable 
let accountState;

// accountId= 2 // Not Allowed to  change a constant variable

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Raipur"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
/*
prefer not to use var
because of issue in block scope and functional scope
*/