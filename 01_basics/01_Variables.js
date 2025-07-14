const accountId = 144553
let accountEmail = "kj968000@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"


accountEmail = "hc@hc.com"
accountPassword = "21212154"
accountCity = "Bengaluru"


console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])