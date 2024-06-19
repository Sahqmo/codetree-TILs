// 변수 선언 및 입력
const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().split(" ").map(Number);

let arr = Array(b).fill(0);
let num = a

while (num / b > 0) {
    arr[num % b] += 1
    num = Math.floor(num / b)
}

let result = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        result += Math.pow(i, 2)
    }
}

console.log(result)