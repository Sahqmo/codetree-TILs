let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let maxVal = Number.MIN_SAFE_INTEGER;

for (i in input) {
    if (input[i] > maxVal) {
        maxVal = input[i];
    }
}

console.log(maxVal)