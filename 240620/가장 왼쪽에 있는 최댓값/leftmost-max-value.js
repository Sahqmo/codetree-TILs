let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr = input[1].split(" ").map(Number);
let downfilter = arr.slice()
downfilter.sort((a, b) => b - a);

let str = ""

while (arr.length != 1){
    for (i in arr) {
        if (arr[i] === downfilter[0]) {
            str += (Number(i) + 1) + " ";
            arr.length = Number(i) + 1;
            downfilter = arr.slice()
            break;
        }
    }
}

console.log(str)