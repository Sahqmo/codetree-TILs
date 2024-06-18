let fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

let arr = Array(4).fill(0);
let str = ""

for (let i = 0; i < input.length; i++) {
    let is_sick = input[i][0] === "Y" ? true : false
    let temperature = input[i][1]

    if (is_sick) {
        arr[0 + 2 * Number(temperature >= 37)] += 1
    } else {
        arr[3 - 2 * Number(temperature >= 37)] += 1
    }
}


for (let i = 0; i < arr.length; i++) {
    str += arr[i] + " ";
}

if (arr[0] >= 2) {
    str += "E"
}

console.log(str)