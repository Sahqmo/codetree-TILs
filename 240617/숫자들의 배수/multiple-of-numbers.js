let fs = require('fs')
let input = Number(fs.readFileSync(0))

let mul5 = 0
let count = 1
let str = ""

while (mul5 < 2) {
    str += input * count + " "
    if (input * count % 5 === 0) mul5++
    count++;
}

console.log(str)