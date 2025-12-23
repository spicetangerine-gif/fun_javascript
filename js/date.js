// Date 객체.

// let today = new Date(`2025-02-03T10:00:00`);
// console.log(today.getMonth()); // 0(1월) ~ 11(12월)
// console.log(today.getDay()); // 일(0) ~ 토(6)
// switch (today.getDay()) {
//   case 0:
//     console.log("일요일");
//     break;
//   case 3:
//     console.log("목요일");
//     break;
//   case 6:
//     console.log("토요일");
// }

// today = new Date("2025-02-22");
// today.setFullYear(2023);
// today.setMonth(0);

// today.setFullYear(1970); // 1970.01.01
// today.setMonth(0);
// today.setDate(1);
// today.setHours(0);
// today.setMinutes(0);
// today.setSeconds(1); // getTime() 기준시간 + 1000
// today = new Date();

// const aday = new Date("Sun Dec 21 2025 16:28:00 GMT+0900");
// const diff = (today.getTime() - aday.getTime()) / 1000;
// // ((시) 분, 초 단위환산
// const hours = Math.floor(diff / (60 * 60));
// const minutes = Math.floor((diff % (60 * 60)) / 60); // 분
// const seconds = Math.floor(diff % 60); // 초
// console.log(`${hours}시간 ${minutes}분 ${seconds}초`);

let year = 2025;
let month = 3;
let today = new Date();
today.setFullYear(year);
today.setMonth(month - 1);
today.setDate(1);
console.log(
  `월: ${
    today.getMonth() + 1
  }, 날짜: ${today.getDate()}, 요일:${today.getDay()}`
);
today.setMonth(month);
today.setDate(0);
console.log(`말일: ${today.getDate()}`); // 1일의 요일, 말일의 정보.

// printCalendar(2025, 12); // 달력호출
// 계산.
// 달력()
function printCalendar(yyyy, mm) {
  let today = new Date(); // Date객체 선언. 2025년 5월달.
  today.setFullYear(yyyy); // 2025
  today.setMonth(mm - 1); // 2025.5.
  today.setDate(1); // 2025.5.1

  // 1일이 요일정보.
  const spaces = today.getDay(); // 요일정보

  today.setMonth(mm); // 2025. 6.
  today.setDate(0); // 2025. 5. 말일

  // 월의 마지막날.
  const lastDate = today.getDate();

  // 배열.
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let htmlStr = `<table border='2'><thead><tr>`;
  for (let day of days) {
    htmlStr += `<th>${day}</th>`;
  }
  htmlStr += "</tr></thead><tbody><tr>";
  // 공란
  for (let s = 0; s < spaces; s++) {
    htmlStr += `<td> </td>`;
  }
  // 날짜.

  for (let d = 1; d <= lastDate; d++) {
    htmlStr += `<td>${d}</td>`;
    if ((d + spaces) % 7 == 0) {
      htmlStr += "</tr><tr>";
    }
  }
  htmlStr += `</tr></thead></table>`;
  // id가 calendar인 요소의 innerHTML의 속성에 값을 넣으면
  document.querySelector("#calender").innerHTML = htmlStr;
}
document.querySelector("button").addEventListener("click", (e) => {
  let year = Number(document.querySelector("#yyyy").value);
  let month = Number(document.querySelector("#mm").value);
  printCalendar(year, month);
});

// 객체, 메소드 =>
function printDay(now = Date()) {
  // 콘솔에 요일정보를 출력하는 함수.
  switch (now.getDay()) {
    case 0:
      console.log("일요일");
      break;
    case 1:
      console.log("월요일");
      break;
    case 2:
      console.log("화요일");
      break;
    case 3:
      console.log("수요일");
      break;
    case 4:
      console.log("목요일");
      break;
    case 5:
      console.log("금요일");
      break;
    case 6:
      console.log("토요일");
      break;
  }
}

// printDay(today);
