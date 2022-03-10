let username = "JackOfAllTrades";
let userCheck = /^[a-zA-Z][a-zA-Z]+[\d]*$|^[a-zA-Z][\d][\d]+$/g; // Change this line
let result = userCheck.test(username);

console.log(result);