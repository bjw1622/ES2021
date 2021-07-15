//특정한 값을 저장하는 것 변수!
let total = 5000 +8000 + 10000 +9000;
console.log(total);

// let은 선언 total은 변수명, 값을 대입하는 행위는 초기화라고 한다.
// 변수 선언은 항상 결과값이 undefined로 출력된다.

//예약어는 변수명으로 사용되지 않는다.

//변수의 값 수정하기.
let change = "값 수정.";
chage = `변경 완료`;
console.log(change);
//let의 역할로 인해서 let이 없을 때는 코드가 식이라서 대입한 값이 결괏값으로 출력되지만
// let이 앞에 붙는 순간 선언문 => undefined이 된다.
//undefined와 null을 통해 빈 값을 부여 가능하지만, null을 사용하자!

//변수 활용하기
let string = `Hello, variable`;
let string2 = string;
console.log(string2);

//상수 만들기
//let 외에도 변수 선언 가능한 const, var가 존재한다.var는 쓰임x
//const는 흔히 상수라고 불리지만 객체의 내부 값에서는 적용되지 않음.
//상수는 값이 수정되지 않기 때문에 안전하게 코딩 가능하다.