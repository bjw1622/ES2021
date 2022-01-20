const $ = (selector) => {
  return document.querySelector(selector);
};

const number = parseInt(prompt("몇 명이 참가하나요?"), 10);
let count = 0;
let word; //제시어
let newWord; // 새로 입력한 단어
// input
$("input").addEventListener("input", function (event) {
  newWord = event.target.value;
});

// button
$("button").addEventListener("click", (event) => {
  // FIX
  // word => undefined이므로 !word는 true이다.
  if (!word) {
    word = newWord;
    $("#word").textContent = word;
    $("input").value = "";
  } else {
    if (newWord[0] === word[word.length - 1]) {
      word = newWord;
      $("#word").textContent = word;
      $("input").value = "";
    } else {
    }
  }
});
