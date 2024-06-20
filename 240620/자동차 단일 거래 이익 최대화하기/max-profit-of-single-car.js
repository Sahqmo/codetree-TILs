let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let cheapest_year = 0

let minVal = Number.MAX_SAFE_INTEGER;
let profit = 0

for (i in arr) {
    if (arr[i] < minVal) {
        cheapest_year = Number(i);
        minVal = arr[i]
    }
}

for (let i = cheapest_year + 1; i < n; i++) {
    if (arr[i] - minVal > profit) {
        profit = arr[i] - minVal
    }
}

console.log(profit)