let fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ").map(Number);

let arr = Array(9).fill(0);

for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) break;
    arr[Math.floor(input[i] / 10) - 1] += 1
}

for (let i = 0; i < arr.length; i++) {
    console.log(i+1, "-", arr[i]);
}