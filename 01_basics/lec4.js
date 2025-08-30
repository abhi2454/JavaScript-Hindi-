const accountId = 12434
let accountEmail = "Abhinav@gmail.com"
var accountPassword = "abbbb"
accountCity = "Jaipur"
let accountState;

// accountId = 2  --------------> NOT ALLOWED(constant)

accountEmail = "1233abhinav@google.com"
accountPassword = "2112121212"
accountCity = "Bengaluru"


console.log(accountId);

/*
Prefer not to use VAR because of issue in block scope and functional scope
 */

console.table([accountEmail,accountPassword,accountCity,accountState]);


