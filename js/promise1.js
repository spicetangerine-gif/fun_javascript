// resolve, reject

let orderMenu = "떡볶이";

const p1 = new Promise((resolve, reject) => {
  if (orderMenu == "라면") {
    resolve("주문을 완료!!");
  } else {
    reject("주문을 취소!!");
  }
});

p1.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

fetch("js/data.json")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
