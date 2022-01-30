const fs = require('fs');
let input = fs.readFileSync('example.text').toString().split('\n').map(v => Number(v)).sort((a, b) => a - b);

let sum = 0;
input.forEach(v => sum += v);

console.log(sum / 5);
console.log(input[3]);