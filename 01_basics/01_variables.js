const accountId = 144254
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;// undefiened value will return 

//accountId = 2 // mot allowed
accountEmail = "hbcd@gmail.com"
accountPassword = "78463"
accountCity = "Bengalurur"

console.log(accountId);
console.log(accountEmail);
console.log(accountCity);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


