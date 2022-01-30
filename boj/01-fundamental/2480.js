const fs = require('fs');
let input = fs.readFileSync('example.text').toString().split(' ').map(v => Number(v)).sort((a, b) => (b - a));

let a = input[0];
let b = input[1];
let c = input[2];

if (a === b && b === c)
  console.log(10000 + a * 1000);
else if (a === b || a === c)
  console.log(1000 + a * 100);
else if (b === c)
  console.log(1000 + b * 100);
else 
  console.log(a * 100);