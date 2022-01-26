const$ = (selector) => document.querySelector(selector);

// 숫자 랜덤으로 4자리 만들기
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const answer = [];
for (let i = 0; i <= 3; i++) {
  const index = Math.floor(Math.random() * 9 + 1);

  answer.push(numbers[index]);
}
