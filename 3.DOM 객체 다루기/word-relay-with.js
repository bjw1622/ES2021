const $ = (selector) => {
  return document.querySelector(selector);
};

const number = parseInt(prompt("몇 명이 참가하나요?"), 10);

$("input").addEventListener("input", function () {
  console.log("글자 입력");
});
