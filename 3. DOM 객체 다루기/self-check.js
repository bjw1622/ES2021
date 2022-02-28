const $ = (selector) => document.querySelector(selector);

const number = prompt("몇 명 참가하나요?");
let word;
let newWord;
let count = 0;
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
      $("span").textContent = `${count + 1}번째 참가자`;
      count += 1;
    } else {
      alert("3글자로 입력해주세요");
      $("input").value = "";
      $("input").focus();
    }
  }
  // 제시어 존재
  else {
    if (newWord.length === 3 && word[2] === newWord[0]) {
      word = newWord;
      $(".word").textContent = `제시어 : ${word}`;
      $("input").value = "";
      $("input").focus();
      $("span").textContent = `${count + 1}번째 참가자`;
      if (count === number - 1) {
        count = 0;
      } else {
        count += 1;
      }
    } else {
      alert("틀렸습니다. 다시 입력해주세요");
      $("input").value = "";
      $("input").focus();
      if (count === 0) {
        $("span").textContent = `${count + 1}번째 참가자`;
      } else {
        $("span").textContent = `${count}번째 참가자`;
      }
    }
  }
});
