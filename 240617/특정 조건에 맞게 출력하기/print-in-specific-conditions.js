let fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ").map(Number);

let str = ""

for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) break;
    if (input[i] % 2 == 0) {
        str += (input[i] / 2) + " "
    } else {
        str += (input[i] + 3) + " "
    }
}

console.log(str)