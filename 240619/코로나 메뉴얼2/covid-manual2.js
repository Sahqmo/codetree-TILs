let fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");


let arr = Array(4).fill(0);
let str = ""

for (let i = 0; i < input.length; i++) {
    let person_info = input[i].split(" ")
    let is_sick = person_info[0] === "Y" ? true : false
    let temperature = person_info[1]

    arr[3 - Number(is_sick) - 2 * Number(temperature >= 37)] += 1
}


for (let i = 0; i < arr.length; i++) {
    str += arr[i] + " ";
}

if (arr[0] >= 2) {
    str += "E"
}

console.log(str)