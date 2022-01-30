const fs = require('fs');
let input = fs.readFileSync('example.text').toString().split('\n').map(v => Number(v));

let sum = 0;
let odds = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] % 2 === 1) {
    sum += input[i];
    odds.push(input[i]);
  }
}
odds.sort((a, b) => a - b);

if (sum === 0)
  console.log(-1);
else {
  console.log(sum);
  console.log(odds[0]);
}

