let fs = require("fs");
let input = fs.readFileSync(0).toString();

let arr = ['L', 'E', 'B', 'R', 'O', 'S'];

let idx = -1

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === input) idx = i
}

if (idx === -1) {
    console.log("None")
} else {
    console.log(idx)
}