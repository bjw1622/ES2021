const $ = (selector) => {
  return document.querySelector(selector);
};

const number = parseInt(prompt("몇 명이 참가하나요?"), 10);

// input
$("input").addEventListener("input", function (event) {
  console.log(event.target.value);
});

// button
$("button").addEventListener("click", (event) => {
  console.log(event.target);
});
