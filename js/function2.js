let totalCnt = 100;
let page = 1; // 현재페이지.
const pageSize = 6;
let realEnd = Math.ceil(totalCnt / pageSize); // 건수계산 마지막페이지.
let startPage = 1, // 시작페이지.
  endPage = 10; // 마지막페이지.
let prev = false, // 이전페이지 여부.
  next = false; // 이후페이지 여부.

// next 여부.

/////////////////////// 함수들 /////////////////////////
function printBtn(page = 1) {
  // 현재페이지 기준으로 계산.

  endPage = Math.ceil(page / 10) * 10;
  startPage = endPage - 9;
  // 실제마지막 페이지보다 작음.
  endPage = endPage > realEnd ? realEnd : endPage;
  // 이전, 이후 페이지 계산.
  prev = startPage == 1 ? false : true;
  next = endPage < realEnd ? true : false;

  // 1 ~ 10 반복하면서
  // <li class="page-item"><a class="page-link" href="#">1</a></li>
  let ulPagination = document.querySelector("ul.pagination");
  ulPagination.innerHTML = "";
  // prev생성여부.
  let liTag = document.createElement("li");
  liTag.className = "page-item"; // 클래스 추가.
  let ahref = document.createElement("a");
  ahref.className = "page-link"; // 클래스 추가.
  ahref.innerText = "Previos";
  ahref.setAttribute("data-page", startPage - 1);
  if (prev) {
    // href속성 추가.
    ahref.setAttribute("href", "#");
  } else {
    // class에 disabled 추가.
    liTag.classList.add("disabled");
  }
  // 부모-자식.
  liTag.appendChild(ahref);
  ulPagination.appendChild(liTag);

  // 페이지 수만큼 출력.
  for (let p = startPage; p <= endPage; p++) {
    const liTag = document.createElement("li");
    liTag.className = "page-item";
    if (page == p) {
      liTag.className = "active";
    }
    const ahref = document.createElement("a");
    ahref.className = "page-link";
    ahref.setAttribute("href", "#");
    ahref.innerText = p;
    ahref.setAttribute("data-page", p);
    // 부모-자식.
    liTag.appendChild(ahref);
    ulPagination.appendChild(liTag);
  }
  /// next 부분생성
  liTag = document.createElement("li");
  liTag.className = "page-item";
  ahref = document.createElement("a");
  ahref.className = "page-link";
  ahref.innerText = "next";
  ahref.setAttribute("data-page", endPage + 1);
  if (next) {
    // href속성 추가.
    ahref.setAttribute("href", "#");
  } else {
    // class에 disabled 추가.
    liTag.classList.add("disabled");
  }
  liTag.appendChild(ahref);
  ulPagination.appendChild(liTag);
}

// 함수(member => tr>td:(id), td:(fn), td:(ln), td:(salary))
function makeTr(member) {
  const fields = ["id", "first_name", "last_name", "salary"];
  const trTag = document.createElement("tr");
  // td*4 생성.
  for (let field of fields) {
    const tdTag = document.createElement("td"); // <td></td>
    tdTag.innerText = member[field];
    // appendChild.
    trTag.appendChild(tdTag);
  }
  // tr반환.
  return trTag;
}

// 멤버 수만큼 tr 생성.
const target = document.querySelector("#target");

function showPageList(pg = 1) {
  // 기존목록 지우기.
  target.innerHTML = "";

  let page = pg; // 페이지.

  let start = (page - 1) * pageSize; // 20
  let end = page * pageSize; // 30
  let pageAry = ary1.slice(start, end);

  // 배열의 건수만큼 화면출력.
  for (let elem of pageAry) {
    const newTr = makeTr(elem);
    target.appendChild(newTr);
  }
} // end of showPageList().
showPageList();
printBtn();
/////////////////// 이벤트 ////////////////////////
document.querySelector("ul.pagination").addEventListener("click", (e) => {
  // 클릭되는 대상 파악하기.
  let selectPage = 1;
  if (e.target.tagName == "A") {
    selectPage = e.target.dataset.page; // <a data-img=""data-page="1">1</a>
    showPageList(selectPage);
    printBtn(selectPage);
  }
});
