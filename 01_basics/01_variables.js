const accountId = 10082
let accountEmail ="test@test.com"
var accountPassword = "789456"
accountCity = "Noida" //  it is possible to use variable without var initials but not prefered.
let accountState; //In javascript if varible is defined but not assigned any value then in console it will reflect as 'undefined'

//accountId = 34 //NOT ALLOWED

accountEmail ="newtest.@test.com"
accountPassword = "565656"
accountCity = "GWL" 

console.log(accountId);
//not print one by one by console.log rather use console.table

/* Prefer not use var beacuse of issue in block scope and functiona scope*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
