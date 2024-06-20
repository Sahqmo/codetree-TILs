let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let minSub = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n - 1; j++) {
        if (arr[j] - arr[i] < minSub) minSub = arr[j] - arr[i];
    }
}

console.log(minSub)