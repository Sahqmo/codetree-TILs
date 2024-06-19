let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr_A = input[1].split(" ").join("");
let arr_B = input[2].split(" ").join("");

console.log(arr_A.includes(arr_B) ? "Yes" : "No")