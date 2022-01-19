const $ = (selector) => {
  document.querySelector(selector);
};

const number = parseInt(prompt("몇 1명이 참가하나요?"), 10);
$(".btn").addEventListener("click", (event) => {
  console.log(event.target);
});
