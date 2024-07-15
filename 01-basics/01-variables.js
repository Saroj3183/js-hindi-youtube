const accountId = 12345
let accountEmail = "saroj@gmail.com"
var accountPassword = "313131"
accountCity = "jaipur"
let accountState;

//accountId = "3" not allowed

accountEmail = "pratik@gmail.com"
accountPassword = "3183"
accountCity = "gujrat"

/*
 prefer not to use var
 because of issues in block scope and fuctional scope
*/


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])