let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let target = input[0].split(" ")[1]
let arr = input[1].split(" ");

let cnt = 0

for (num in arr) {
    if (arr[num] === target) {
        cnt++
    }
}

console.log(cnt)