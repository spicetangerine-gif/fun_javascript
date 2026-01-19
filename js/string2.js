// string2.js
const str = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium eaque fuga, maiores tempora eos eius at, culpa qui, provident modi impedit. Voluptatem, veritatis est. Saepe nihil explicabo unde soluta molestiae.`;
const strAry = str.split(" ");
console.log(strAry);

// 문자열생성.
const container = document.querySelector("div.container");
for (let word of strAry) {
  let span = document.createElement("span");
  span.innerHTML = word;
  container.appendChild(span);
}

//////////////////////////////////////////////////////
// 1.버튼에 클릭이벤트 등록.

document
  .querySelector("button.btn.btn-secondary")
  .addEventListener("click", (e) => {
    // 2.사용자 입력값 체크.
    const userItem = document.querySelector("#user_input");
    const userTxt = userItem.value;
    if (!userTxt) {
      alert("값을 입력하세요.");
      return;
    }
    // 3.화면의 span 요소를 가져와서 사용자 입력값과 비교 => remove()
    const spans = document.querySelectorAll("div.container>span");
    for (let span of spans) {
      if (span.textContent.indexOf(userTxt) != -1) {
        span.remove();
      }
    }
    userItem.value = ""; // 초기화.
    userItem.focus(); // 포커스.
  });
