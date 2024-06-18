let fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ").map(Number);

let arr = Array(11).fill(0);

for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) break;
    arr[Math.floor(input[i] / 10)] += 1
}

arr.reverse()

for (let i = 0; i < arr.length - 1; i++) {
    console.log(100 - i * 10, "-", arr[i])
}