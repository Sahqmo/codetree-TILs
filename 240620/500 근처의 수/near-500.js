let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let over500 = Number.MAX_SAFE_INTEGER;
let under500 = Number.MIN_SAFE_INTEGER;

for (i in input) {
    if (input[i] > under500 && input[i] < 500) {
        under500 = input[i];
    }
    if (input[i] < over500 && input[i] > 500) {
        over500 = input[i];
    }
}

console.log(under500, over500)