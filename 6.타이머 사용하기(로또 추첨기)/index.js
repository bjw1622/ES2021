const $ = selector => {
  return document.querySelector(selector);
};
// 45개의 숫자 생성
const candidate = Array(45)
  .fill()
  .map((v, i) => i + 1);

const shuffle = [];

// 무작위로 공 뽑기
// 피셔-예이츠 셔플
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}
// 무작위로 7개 뽑은거 오름차순으로 정렬
const winBalls = shuffle.slice(0, 6).sort((a, b) => {
  return a - b;
});

// 색깔 변경 코드
function colorlize($ball, winBalls, number) {
  if (winBalls[number] < 10) {
    $ball.style.backgroundColor = 'red';
    $ball.style.color = 'white';
  } else if (winBalls[number] < 20) {
    $ball.style.backgroundColor = 'orange';
  } else if (winBalls[number] < 30) {
    $ball.style.backgroundColor = 'blue';
    $ball.style.color = 'white';
  } else {
    $ball.style.backgroundColor = 'green';
    $ball.style.color = 'white';
  }
}

// ball 그리는 메서드
function ballDisplay(number, tag) {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = `${winBalls[number]}`;
  colorlize($ball, winBalls, number);
  $(tag).appendChild($ball);
}

// 함수를 활용하여 중복 제거 => refactoring
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    ballDisplay(i, '#result');
  }, (i + 1) * 1000);
}

setTimeout(() => {
  ballDisplay(5, '#bonus');
}, 6000);
