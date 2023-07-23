var fs = require("fs");

const arr1= []
for(let i=0;i<=1e8;i++){
    arr1.push(i)
}
fs.writeFileSync("3.Solution.txt", arr1.join('\n'))
