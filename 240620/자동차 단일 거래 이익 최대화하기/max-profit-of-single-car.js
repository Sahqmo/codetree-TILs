// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let price = input[1].split(" ").map(Number);

// 배열을 앞에서부터 순회하며 사는 시점의 후보를 선택합니다
let maxProfit = 0;
for (let i = 0; i < n; i++) {
    // 사는 시점의 다음 해부터 순회하며 파는 시점의 후보를 선택합니다
    for (let j = i + 1; j < n; j++) {
        let profit = price[j] - price[i];

        if (profit > maxProfit)
            maxProfit = profit;
    }
}

console.log(maxProfit);