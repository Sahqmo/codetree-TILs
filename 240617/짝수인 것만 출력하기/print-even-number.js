let fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n")

let amt = input[0]
let nums = input[1].split(" ").map(Number)

let even = []

for (let i = 0; i < amt; i++) {
    if (nums[i] % 2 === 0) {
        even.push(nums[i])
    }
}

for (let j = 0; j < even.length; j++) {
    process.stdout.write(even[j] + " ")
}