let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0])
let nums = input[1].split(" ").map(Number)
let cnt = 0

for (i in nums) {
    if (nums[i] === 2) cnt++;
    if (cnt === 3) {
        console.log(Number(i) + 1)
        break;
    }
}