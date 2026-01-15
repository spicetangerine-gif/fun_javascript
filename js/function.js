// 함수

// 함수정의(sumArray);
function sumArry(ary = []) {
  // 배열요소의 합을 반환.
  let sum = 0;
  for (let num of ary) {
    sum += num;
  }
  return sum; // 반환.
}

let result = sumArry([1, 2, 3, 4, 5]);
console.log(`결과값은 ${result}`);

// 정의: 함수표현식.
const getMax = function (ary = []) {
  // 배열요소에서 max값을 반환.
  let max = 0;
  for (let elem of ary) {
    if (max < elem) {
      max = elem; // max 갑보다 elem가 크면 max에 할당.
    }
  }
  return max;
};
result = getMax([45, 12, 33, 20, 5]);
console.log(`결과값은 ${result}`);

// 정의: 화살표함수.
const getMin = (n1, n2) => (n1 > n2 ? n2 : n1);
result = getMin(23, 17);
console.log(`결과값은${result}`);
///////////////////////////////////////
let myInt = 1;
function increase(value) {
  return (value += 1);
}

// // 함수,배열,객체 => 평균나이를 구하는 함수.
// function getAverageAge(person=[]){
//   // 객체 배열을 매개값으로 받아서 평균나이를 반환.
// let sum = 0;
// }
// const manyPeople = [
//   {name:"홍길동",age: 20},
//   {name:"박민수",age: 33},
//   {name:"최태영",age: 27},
//   {name:"홍성식",age: 17},
// ];
// // 함수호출.
// result = getAverageAge();

// json문자열 데이터.
const jsonData = `[{"id":1,"first_name":"Orland","last_name":"Zanicchi","email":"ozanicchi0@quantcast.com","gender":"Male","salary":12032},
{"id":2,"first_name":"Genovera","last_name":"Skim","email":"gskim1@whitehouse.gov","gender":"Female","salary":13807},
{"id":3,"first_name":"Feodora","last_name":"Mercer","email":"fmercer2@tmall.com","gender":"Female","salary":17994},
{"id":4,"first_name":"Willard","last_name":"Saiz","email":"wsaiz3@rambler.ru","gender":"Male","salary":10356},
{"id":5,"first_name":"Melissa","last_name":"Knapton","email":"mknapton4@posterous.com","gender":"Female","salary":2269},
{"id":6,"first_name":"Coleen","last_name":"Carryer","email":"ccarryer5@topsy.com","gender":"Female","salary":8268},
{"id":7,"first_name":"Geri","last_name":"Coursor","email":"gcoursor6@com.com","gender":"Polygender","salary":16563},
{"id":8,"first_name":"Bing","last_name":"Lyddyard","email":"blyddyard7@cnbc.com","gender":"Genderfluid","salary":3543},
{"id":9,"first_name":"Shawna","last_name":"Gallymore","email":"sgallymore8@aol.com","gender":"Female","salary":17075},
{"id":10,"first_name":"Kimberley","last_name":"Lundy","email":"klundy9@studiopress.com","gender":"Female","salary":7408},
{"id":11,"first_name":"Jonathon","last_name":"Coolbear","email":"jcoolbeara@gmpg.org","gender":"Male","salary":5759},
{"id":12,"first_name":"Alisha","last_name":"Emery","email":"aemeryb@ehow.com","gender":"Female","salary":14695},
{"id":13,"first_name":"Cassie","last_name":"Patriche","email":"cpatrichec@europa.eu","gender":"Male","salary":14550},
{"id":14,"first_name":"Linn","last_name":"Glason","email":"lglasond@geocities.com","gender":"Female","salary":15888},
{"id":15,"first_name":"Shandra","last_name":"Beckinsale","email":"sbeckinsalee@intel.com","gender":"Female","salary":14945}]
`;
const memberAry = JSON.parse(jsonData); // 문자열 -> 객체 변환.
console.log(memberAry);

let sum = 0; // memberAry급여 합.
let sumOfMale = 0; // Gender가 'Male'인 합계.
let avg = 0; // 전체평균.
let avgOfMale = 0; // 남자평균
let cntOfMale = 0; // 남자인원.

for (let elem of memberAry) {
  sum += elem.salary; // 전체합계.

  if (elem.gender == "Male") {
    sumOfMale += elem.salary;
    cntOfMale++; // 남자 몇명인지 카운트.
  }
}
console.log(
  `전체 급여는 ${sum}
  , 전체 급여평균은 ${sum / memberAry.lengt}
  , 남자 합계급여는 ${sumOfMale}
  , 남자 평균급여는 ${sumOfMale / cntOfMale}`
);
