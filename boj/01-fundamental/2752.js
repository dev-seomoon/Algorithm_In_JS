const fs = require('fs');
let input = fs.readFileSync('example.text').toString().split(' ').map(v => Number(v)).sort((a, b) => (a - b));

console.log(input.join(' '));