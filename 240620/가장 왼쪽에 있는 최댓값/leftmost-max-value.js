let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr = input[1].split(" ").map(Number);
let maxVal;

let str = ""

while (arr.length > 1){
    maxVal = Number.MIN_SAFE_INTEGER;
    for (i in arr) {
        if (arr[i] > maxVal) {
            maxVal = arr[i]
        }
    }

    for (i in arr) {
        if (arr[i] === maxVal) {
            str += (Number(i) + 1) + " ";
            arr.length = Number(i);
            break;
        }
    }
}

console.log(str)