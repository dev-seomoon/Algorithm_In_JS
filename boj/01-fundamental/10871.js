// BOJ에서는 'example.text' -> '/dev/stdin'으로 변경
let input = require('fs').readFileSync('example.text').toString().split('\n');

let max = Number(input[0].split(' ')[1])

let numbers = input[1].split(' ').map(num => Number(num));

const answer = numbers.filter(v => v < max);

console.log(answer.join(' '));