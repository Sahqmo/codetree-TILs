let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr = input[1].split(" ").map(Number)
let minVal = Number.MAX_SAFE_INTEGER;
let amt = 0

for (idx in arr) {
    if (arr[idx] < minVal) {
        minVal = arr[idx]
    }    
}

for (idx in arr) {
    if (arr[idx] === minVal) {
        amt++;
    }
}

console.log(minVal, amt)