const fs = require('fs');
let input = fs.readFileSync('example.text').toString().trim().split(' ').map(Number).sort((a, b) => a - b);

let begin = input[0];
let end = input[1];


if (end - begin < 2)
  console.log(0);
else {
  console.log(end - begin - 1);
  let answer = [];
  for (let i = begin + 1; i < end; i++) {
    answer.push(i);
  }
  console.log(answer.join(' '));
}