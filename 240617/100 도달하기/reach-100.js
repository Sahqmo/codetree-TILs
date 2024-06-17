let fs = require("fs");
let input = Number(fs.readFileSync(0))

let arr = []
arr[0] = 1
arr[1] = input
let counter = 2

let sum = 0
let str = `${arr[0]} ${arr[1]} `

while (sum <= 100) {
    sum = arr[counter - 2] + arr[counter - 1]
    str += sum + " "
    arr.push(sum)
    counter++
}

console.log(str)