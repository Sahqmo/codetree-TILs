let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr = input[1].split(" ").map(Number);

let store = [-1]
let two_times = []

for (idx in arr) {
    // 중복 수 배열에 없다면 (새로 등장한 숫자라면)
    if (!two_times.includes(arr[idx])) {
        two_times.push(arr[idx])
        store.push(arr[idx])
    // 중복 수 배열에 있다면 (이미 등장한 숫자라면)
    } else {
        if (store.includes(arr[idx])) {
            store = store.filter((e) => e !== arr[idx])
        }
    }
}

store.sort((a, b) => {return b - a})

console.log(store[0])