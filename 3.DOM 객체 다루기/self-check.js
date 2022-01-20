const $ = (selector) => document.querySelector(selector);

const number = prompt("몇 명 참가하나요?");
let word;
let newWord;
// 참여 안 할 경우
if (number === null) {
  alert("다음 기회에 참여해주세요");
}

$("input").addEventListener("input", (event) => {
  newWord = event.target.value;
});

$("button").addEventListener("click", (event) => {
  // 제시어 존재 X
  if (!word) {
    if (newWord.length === 3) {
      word = newWord;
      $(".word").textContent = `제시어 : ${word}`;
      $("input").value = "";
      $("input").focus();
    } else {
      alert("3글자로 입력해주세요");
      $("input").value = "";
      $("input").focus();
    }
  }
  // 제시어 존재
  else {
    if (newWord.length === 3 && word[word.length - 1] === newWord[2]) {
      word = newWord;
      $(".word").textContent = `제시어 : ${word}`;
      $("input").value = "";
      $("input").focus();
    } else {
      alert("틀렸습니다");
      $("input").value = "";
      $("input").focus();
    }
  }
});
