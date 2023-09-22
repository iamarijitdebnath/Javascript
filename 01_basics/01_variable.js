const accountId =12121
let accountEmail = "arijit@zyx"
var accountPassword ="12345"
accountCountry = "India"

// accountId =2 //not allowed

/*
We should prefer to not use var because of issue in block scope and functional scope
*/


accountEmail ="arijit@google.com"
accountPassword ="6789010"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCountry])