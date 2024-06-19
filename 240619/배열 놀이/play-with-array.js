let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n, q] = input[0].split(" ");
let arr_n = input[1].split(" ");


let questions = Array(q)

for (let i = 0; i < q; i++) {
    questions[i] = input[i + 2].split(" ")
}

for (i in questions) {
    let a = Number(questions[i][1])
    switch(questions[i][0]) {
        case "1":
            console.log(arr_n[a - 1]);
            break;
        case "2":
            let result = 0
            for (j in arr_n) {
                if (arr_n[j] == a) {
                    result = Number(j) + 1
                    break;
                }
            }
            console.log(result)
            break;
        case "3":
            let b = Number(questions[i][2])
            let str = ""
            for (k in arr_n) {
                if (k >= a && k <= b) {
                    str += arr_n[k - 1] + " "
                }
            }
            console.log(str)
            break;
    }
}