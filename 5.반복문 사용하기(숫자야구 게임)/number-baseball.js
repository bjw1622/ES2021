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

const tries = [];
function checkInput(input) {
  if (input.length !== 4) {
    return alert('4자리를 입력해 주세요.');
  }
  if (new Set(input).size !== 4) {
    return alert('중복되지 않게 입력해 주세요.');
  }
  if (tries.includes(input)) {
    return alert('이미 시도한 값입니다.');
  }
}

// form안의 버튼을 클릭하면 submit 이벤트 발생
$('#form').addEventListener('submit', event => {
  event.preventDefault(); // 기본 동작 막기
  const value = $('#input').value;
  $('#input').value = '';
  // 답안 검사 코드
  if (checkInput(value)) {
    tries.push(value); //입력 값 문제 없음
  } else {
  }
});
