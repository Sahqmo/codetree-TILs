let fs = require('fs')
let input = Number(fs.readFileSync(0))

let mul5 = []
let count = 1
let str = ""

while (mul5.length < 2) {
    str += input * count + " "
    if (input * count % 5 === 0) mul5.push(input * count)
    count++;
}

console.log(str)