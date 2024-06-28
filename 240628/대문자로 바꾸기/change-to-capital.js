let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

for (i in input) {
    let rows = input[i].split(" ");
    let str = "";
    for (j in rows) {
        str += rows[j].toUpperCase() + " ";
    }
    console.log(str)
}