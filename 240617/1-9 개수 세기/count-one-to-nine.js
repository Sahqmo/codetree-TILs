let fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

let amt = Number(input[0]);
let b = input[1].split(" ").map(Number);

let arr = Array(9).fill(0);

for (let i = 0; i < amt; i++) {
    arr[b[i] - 1] += 1
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}