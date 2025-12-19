// todo_1218.js

//Math.random() 활용. 31 ~ 100 생성.
// 5번 실행
// 합계, 평균, 최대값 => "합계는 480, 평균 96, 최대 99"
// 함수 : scoreInfo => scoreInfo()

// &몇번 실행 (10 매개값으로 받아서 10번 실행)
// scoreInfo(10)

// git add
// git commit -m "18일 숙제완료"
// git push origin main

// 1 ~ 10 까지 정수를 합하는 반복문.
// 홀수값만 누적.
// "합계는 55"
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 1)
//     sum += i;
// }
// console.log(`합계: ${sum}`);

// 함수 : oddSum() 정의.
// 함수호출.
function oddSum() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1)
      sum += i;
  }
}

// 함수: sumUp() / 1 ~ 5 까지의 합. 반환.
// result 변수에 저장.
function sumUp() {
  let n = 5;
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}
let result = sumUp();
console.log(`합계 ${result}`);









for (let i = 0; i < 5; i++) {

  Math.floor(Math.random() * (100 - 31 + 1)) + 31;

}
console.log()