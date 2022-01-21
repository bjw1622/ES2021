const $ = (selector) => document.querySelector(selector);
let numOne = "";
let operator = "";
let numTwo = "";
let result = "";
// 리스너 함수의 자리에 맞게 return 타입으로 고차 함수의 형태로
// 함수의 함수안에 실행하고자 하는 걸
const onClickOperator = (ope) => () => {
  if (!numOne) {
    alert("숫자를 입력해주세요");
  } else {
    operator = ope;
    $("#operator").value = ope;
  }
};

const onClickNumber = (event) => {
  if (!operator) {
    numOne += event.target.textContent;
    $("#result").value += event.target.textContent;
    return;
  }
  if (!numTwo) {
    $("#result").value = "";
  }
  numTwo += event.target.textContent;
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
$("#calculate").addEventListener("click", (event) => {
  if (!numTwo) {
    alert("숫자를 입력해주세요.");
    return;
  }
  //   switch (operator) {
  //     case "+":
  //       result = Number(numOne) + Number(numTwo);
  //       break;
  //     case "-":
  //       result = Number(numOne) - Number(numTwo);
  //       break;
  //     case "*":
  //       result = Number(numOne) * Number(numTwo);
  //       break;
  //     case "/":
  //       result = Number(numOne) / Number(numTwo);
  //       break;
  //   }
  if (operator === "+") {
    result = parseInt(numOne) + parseInt(numTwo);
  } else if (operator === "-") {
    result = parseInt(numOne) - parseInt(numTwo);
  } else if (operator === "/") {
    result = parseInt(numOne) / parseInt(numTwo);
  } else if (operator === "*") {
    result = parseInt(numOne) * parseInt(numTwo);
  }
  $("#result").value = result;
});

$("#clear").addEventListener("click", () => {
  numOne = "";
  numTwo = "";
  operator = "";
  result = "";
  $("#operator").value = "";
  $("#result").value = "";
});
