const $ = (selector) => document.querySelector(selector);
let numOne = "";
let operator = "";
let numTwo = "";

// 리스너 함수의 자리에 맞게 return 타입으로 고차 함수의 형태로
// 함수의 함수안에 실행하고자 하는 걸
const onClickNumber = (number) => () => {
  if (operator) {
    numTwo += number;
  } else {
    numOne += number;
  }
  $("#result").value += number;
};

$("#num-0").addEventListener("click", onClickNumber(0));
$("#num-1").addEventListener("click", () => {});
$("#num-2").addEventListener("click", () => {});
$("#num-3").addEventListener("click", () => {});
$("#num-4").addEventListener("click", () => {});
$("#num-5").addEventListener("click", () => {});
$("#num-6").addEventListener("click", () => {});
$("#num-7").addEventListener("click", () => {});
$("#num-8").addEventListener("click", () => {});
$("#num-9").addEventListener("click", () => {});
$("#plus").addEventListener("click", () => {});
$("#minus").addEventListener("click", () => {});
$("#divide").addEventListener("click", () => {});
$("#multiply").addEventListener("click", () => {});
$("#calculate").addEventListener("click", () => {});
$("#clear").addEventListener("click", () => {});
