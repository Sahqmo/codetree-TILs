let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr = input[1].split(" ").map(Number);

let maxVal = -1
let two_times = []

for (idx in arr) {
    if (!two_times.includes(arr[idx]) && arr[idx] > maxVal) {
        maxVal = arr[idx];
        two_times.push(arr[idx])
    }
}

console.log(maxVal)