// array2.js
// 1. 회의용품 카테고리명 중 첫번째 상품명과 가격.
// 2. 판매자명이 펜스토어인 상품의 가격이 1000원 이상인지 판별.
// 3. 상품카테고리명이 필기구인 상품들의 평점이 4점을 넘는게 있는지 판별.

fetch("js/data3.json")
  .then((resp) => resp.json())
  .then((data) => {
    // data.forEach(({ 상품명, 가격, 상품카테고리 }) => {
    //   console.log(상품명, 가격, 상품카테고리);
    // });
    const pd = data.find((e) => {
      return e.상품카테고리 == "회의용품";
    });
    console.log(pd);
  })
  .catch((err) => console.log(err));

fetch("js/data3.json")
  .then((resp) => resp.json())
  .then((data) => {
    // data.forEach(({ 상품명, 가격, 상품카테고리 }) => {
    //   console.log(상품명, 가격, 상품카테고리);
    // });
    const pd = data.filter((e) => {
      return e.판매자정보.판매자명 == "펜스토어";
    });
    let result = pd.every((e) => {
      return e.가격 > 1000;
    });

    console.log(result);
  })
  .catch((err) => console.log(err));

fetch("js/data3.json")
  .then((resp) => resp.json())
  .then((data) => {
    // data.forEach(({ 상품명, 가격, 상품카테고리 }) => {
    //   console.log(상품명, 가격, 상품카테고리);
    // });
    const pd = data.filter((e) => {
      return e.상품카테고리 == "필기구";
    });
    let result = pd.every((e) => {
      return e.평점 > 4;
    });

    console.log(result);
  })
  .catch((err) => console.log(err));
