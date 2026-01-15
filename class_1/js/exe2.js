//exe2.js
// 가위바위보 게임.
// 1(가위),2(바위),3(보) 
// 시스템 : 1~3, 사용자:1~3
// you Win!/ you Lost!/ you same! 구문을 출력.


let computer = Math.ceil(Math.random() * 3); // 0 <= x < 1
let myChoice = prompt('가위(1), 바위(2), 보(3)를 선택하세요:');

if (myChoice == null || myChoice == '') {
  alert('값을 입력해주세요.')
} else {}


let diff = computer - myChoice;
switch(diff) {
  case -1:
    case 2:
    console.log('You Win');
  break;
  case 1:
    case -2:
    console.log('You lost');
  break;
  default:
  console.log('You same');
}