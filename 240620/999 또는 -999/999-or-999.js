let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let maxVal = Number.MIN_SAFE_INTEGER;
let minVal = Number.MAX_SAFE_INTEGER;

for (idx in input) {
    if (Math.abs(input[idx]) === 999) break;
    if (input[idx] > maxVal) {
        maxVal = input[idx];
    }
    if (input[idx] < minVal) {
        minVal = input[idx]
    }
}

console.log(maxVal, minVal)