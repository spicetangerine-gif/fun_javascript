// exe3.js

const numAry = [10, 30, 50];

numAry[numAry.length] = 20;
numAry[numAry.length] = 60;
numAry[numAry.length] = 80;

// 콘솔에 출력.
// 50보다 크거나 같은 값만 출력.
// 홀수번째 값을 출력.
// 큰값.

let max = 0;
if (numAry[1] > numAry[2]) {
}
for (let i = 0; i < numAry.length; i++) {
  if (i % 2 == 0) {
    console.log(`numAry[${i}] 의 값: ${numAry[i]}`);
  }
}
// 회원정보(회원아이디, 이름, 포인트)
let members = [
  {
    id: "user01",
    name: "홍길동",
    point: 800,
  },
  {
    id: "user02",
    name: "김문희",
    point: 756,
  },
  {
    id: "user03",
    name: "박동철",
    point: 980,
  },
];

// 포인트 합계: 2586, 최고포인트: 980

let sum = 0;
let top = 0;
for (let people of members) {
  sum += people.point;
  people.point;
}
console.log(`${sum}`);
