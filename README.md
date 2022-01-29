# Algorithm_In_JS


[백준 바킹독 실전 알고리즘 문제집](https://github.com/encrypted-def/basic-algo-lecture/blob/master/workbook.md), [프로그래머스 코딩테스트 연습](https://programmers.co.kr/learn/challenges)  
문제들을 JavaScript로 풀면서 코딩테스트에 대비하기 위해 만든 저장소입니다. 
<br /> <br /> 

## VSCode에서 실행하기
1) 문제집 폴더에 `npm install fs --save` 로 fs 모듈 설치
2) js 파일 작성
3) 입력 예제 파일 작성
4) VSCode 터미널에서 `node filename.js`로 실행
<br /> 

### <js 파일 작성 예제>
**백준에 제출할 때는 'example.text' 대신 '/dev/stdin'로 바꿔주기**

#### 한 줄 입력  
```js
const fs = require('fs');
let input = fs.readFileSync('example.text').toString().split(' ');
```

#### 여러 줄 입력  
```js
let fs = require('fs');
let input = fs.readFileSync('example.text').toString().split('\n');

let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(input[i].split(' '));
  }
}

for (let i = 0; i < numbers.length; i++){
  let num1 = Number(numbers[i][0]);
  let num2 = Number(numbers[i][1]);

  console.log(num1 + num2);
}
```
<br />


## Reference 
- 백준 node.js 입출력 방법 정리 (https://nyang-in.tistory.com/156)
