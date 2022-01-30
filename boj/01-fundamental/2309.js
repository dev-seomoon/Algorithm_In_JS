const fs = require('fs');
let input = fs.readFileSync('example.text').toString().trim().split('\n').map(v => Number(v));

let over = input.reduce((acc, v) => acc + v) - 100;

let answer;
for (let i = 0; i < input.length; i++) {
  let pair = input.indexOf(over - input[i]);
  if (pair !== -1 && pair !== i) {
    answer = input.filter(v => v !== input[i] && v !== input[pair]);
    break;
  }
}

console.log(answer.sort((a, b) => a - b).join('\n'));