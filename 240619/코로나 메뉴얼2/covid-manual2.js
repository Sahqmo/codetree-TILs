// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let countArr = Array(5).fill(0);
let typeNum = 0;
let s, t;

// s와 t를 입력받은 후 카운팅 배열을 통해 각각의 빈도 저장
for (let i = 0; i < 3; i++) {
    [s, t] = input[i].split(" ");

    if (t >= 37 && s === "Y") {
        typeNum = 1;
    } else if (t >= 37) {
        typeNum = 2;
    } else if (s === "Y") {
        typeNum = 3;
    } else {
        typeNum = 4;
    }

    countArr[typeNum]++;
}

// A부터 D까지 나온 횟수를 출력
let str = "";
for (let i = 1; i <= 4; i++) {
    str += countArr[i] + " ";
}

if (countArr[1] >= 2) {
    str += "E";
}

console.log(str);