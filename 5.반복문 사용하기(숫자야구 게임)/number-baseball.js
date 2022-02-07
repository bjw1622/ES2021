const $ = selector => {
  return document.querySelector(selector);
};

const numbers = [];
for (let n = 1; n < 10; n += 1) {
  numbers.push(n);
}

const answer = [];
for (let n = 0; n < 4; n += 1) {
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(answer);

// form안의 버튼을 클릭하면 submit 이벤트 발생
$('#form').addEventListener('submit', event => {
  event.preventDefault(); // 기본 동작 막기
});
