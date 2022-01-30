const fs = require('fs');
let input = fs.readFileSync('example.text').toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);

console.log((a + b)+'\n' + (a - b)+'\n' + (a * b)+'\n' + Math.floor(a / b)+'\n' + (a % b));
// js에서는 숫자 타입이 모두 실수로 표현됨