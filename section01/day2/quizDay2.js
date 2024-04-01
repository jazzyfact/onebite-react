//1. Quiz 1
const x = 15;
const y = 20;

let max = x > y ? x : y;
console.log(max);

//2. Quiz 2
const a = true;

switch (typeof a) {
  case "number":
    console.log("숫자");
    break;
  case "string":
    console.log("문자열");
    break;
  case "boolean":
    console.log("불리언");
    break;
  default:
    console.log("타입을 찾을 수 없습니다");
    break;
}

//3. Quiz 3
let temperature = 10;

switch (temperature) {
  case temperature < 0:
    console.log("매우 추움");
    break;
  case temperature < 10:
    console.log("추움");
    break;
  case temperature < 20:
    console.log("적당");
    break;
  default:
    console.log("더움");
    break;
}
