// function sum() {
//   let n = 10;
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     result += i;
//   }
//   console.log(result);
// }
// sum();

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   document.write(`1부터 ${n}까지 더하면 ${sum}`);
// }

// let userNumber = prompt("얼마까지 더할까요?");
// if (userNumber !== null) {
//   calcSum(parseInt(userNumber));
// }

// let now = new Date();
// document.write("현재 시각은 " + now);

// let now = new Date();
// document.write(`현재 시각은${now.toLocaleString()}`);

let numbers = ["one", "two", "three", "four"];
for (let i = 0; i < numbers.length; i++) {
  document.write(`<p>${numbers[i]}</p>`);
}
