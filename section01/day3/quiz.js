//1. 퀴즈1
//변수 num의 모든 약수를 다 찾아서 출력하세요
let num = 100;

for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}

//2. 퀴즈2
//함수 isPrimeNumber는 한개의 매개변수 num을 제공받아 소수인지 판별합니다
//num이 소수라면 true를, 아니라면 false를 반환합니다.

function isPrimeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));

//3. 퀴즈3
/*
두 수를 덧셈하는 함수 add, 뺄셈하는 함수 sub를 각각 구현하세요

2개의 매개변수 num1, num2를 제공받습니다.
연산의 결과를 반환합니다.
다음 조건을 만족하는 함수 calc를 구현하세요

3개의 매개변수 num1, num2, callback을 제공받습니다.

num1, num2 : 연산에 활용될 숫자
callback : 실제로 연산을 수행할 함수
callback 함수로 전달된 연산의 결과값을 콘솔에 출력하세요

*/

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function calculate(num1, num2, operation) {
  const result = operation(num1, num2);
  console.log(result);
}

calculate(5, 3, add);
calculate(5, 3, subtract);
