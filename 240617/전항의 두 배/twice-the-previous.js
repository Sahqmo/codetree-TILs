let fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ").map(Number);

let arr = Array(10);
arr[0] = input[0];
arr[1] = input[1];

let str = `${arr[0]} ${arr[1]} `;

for (let i = 2; i < 10; i++) {
    let an_1 = arr[i - 1];
    let an_2 = arr[i - 2];

    let sum = an_1 + 2 * an_2;
    arr[i] = sum
    str += sum + " "
}

console.log(str)