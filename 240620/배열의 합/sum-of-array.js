const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr2d = [];
for (let i = 0; i < 4; i++) {
    arr2d.push(input[i].split(" ").map(Number));
}


for (i in arr2d) {
    let sum = 0
    for (j in arr2d[i]) {
        sum +=arr2d[i][j]
    }
    console.log(sum)
}