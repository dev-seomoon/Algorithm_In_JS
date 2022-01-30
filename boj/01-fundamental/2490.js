const fs = require('fs');
let input = fs.readFileSync('example.text').toString().split('\n');
let numbers = input.map(v => v.split(' ').map(n => Number(n))); 
const result = ['E', 'A', 'B', 'C', 'D'];

for (let i = 0; i < 3; i++) {
  let zeros = numbers[i].filter(n => n === 0).length;
  console.log(result[zeros]);
}