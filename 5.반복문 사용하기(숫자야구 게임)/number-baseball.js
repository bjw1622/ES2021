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
  return true;
}

let out = 0;
// form안의 버튼을 클릭하면 submit 이벤트 발생
$('#form').addEventListener('submit', event => {
  event.preventDefault(); // 기본 동작 막기

  const value = $('#input').value;
  $('#input').value = '';

  // 답안 검사 코드
  if (!checkInput(value)) {
    return;
  }

  //입력 값 문제 없음
  if (answer.join('') === value) {
    $('#logs').textContent = `홈런!`;
  }

  if (tries.length >= 9) {
    const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
    $('#log').append(message);
  }

  let strike = 0;
  let ball = 0;

  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    // 같은게 있음
    if (index > -1) {
      if (index === i) {
        strike += 1;
      } else {
        ball += 1;
      }
    }
  }

  $('#logs').append(
    `${value}: ${strike} 스트라이크 ${ball} 볼`,
    document.createElement('br')
  );

  if (strike === 0 && ball === 0) {
    out += 1;
  }

  $('#logs').append(`${out} OUT`, document.createElement('br'));

  if (out === 3) {
    alert('3OUT으로 게임 종료!');
  }
  // 시도 값에 추가
  tries.push(value);
});
