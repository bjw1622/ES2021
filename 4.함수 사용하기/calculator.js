const $ = (selector) => document.querySelector(selector);
let numOne = "";
let operator = "";
let numTwo = "";

// 리스너 함수의 자리에 맞게 return 타입으로 고차 함수의 형태로
// 함수의 함수안에 실행하고자 하는 걸
const onClickOperator = (ope) => () => {
  if (!numOne) {
    alert("숫자를 입력해주세요");
  } else {
    operator = ope;
  }
  $("#operator").value = ope;
};

const onClickNumber = (event) => {
  if (!operator === false && !numTwo === true) {
    $("#result").value = "";
  }
  if (operator) {
    numTwo += event.target.textContent;
  } else {
    numOne += event.target.textContent;
  }
  $("#result").value += event.target.textContent;
};
$("#num-0").addEventListener("click", onClickNumber);
$("#num-1").addEventListener("click", onClickNumber);
$("#num-2").addEventListener("click", onClickNumber);
$("#num-3").addEventListener("click", onClickNumber);
$("#num-4").addEventListener("click", onClickNumber);
$("#num-5").addEventListener("click", onClickNumber);
$("#num-6").addEventListener("click", onClickNumber);
$("#num-7").addEventListener("click", onClickNumber);
$("#num-8").addEventListener("click", onClickNumber);
$("#num-9").addEventListener("click", onClickNumber);
$("#plus").addEventListener("click", onClickOperator("+"));
$("#minus").addEventListener("click", onClickOperator("-"));
$("#divide").addEventListener("click", onClickOperator("/"));
$("#multiply").addEventListener("click", onClickOperator("*"));
$("#calculate").addEventListener("click", () => {});
$("#clear").addEventListener("click", () => {});
