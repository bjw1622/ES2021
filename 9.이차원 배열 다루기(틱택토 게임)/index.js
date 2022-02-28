/* 구조 분해 할당
  
1.객체 내부의 속성과 할당하는 변수명이 같을 떄
  ex) const body = document.body
  => const {body} = document
  
2. 배열 구조 분해 할당
  ex) const arr = [1,2,3]
  const one = arr[0]
  const two = arr[1]
  const three = arr[2]
  => const {one, two, three} = arr

  ex) const arr = [1,2,3]
  const one = arr[0]
  const three = arr[2]
  => const {one,,three} = arr

*/

const $ = selector => {
  return document.querySelector(selector);
};

// 구조 분해 할당
const { body } = document;
const $result = document.createElement('div');
const $table = document.createElement('table');
let turn = 'O';
const rows = [];
let count = 0;
// 승부 확인 function
const checkWinner = function (target) {
  // console.log(target.parentNode.rowIndex);
  // console.log(target.cellIndex);
  // console.log(target.parentNode.rowIndex, target.cellIndex);
  count += 1;
  let rowIndex;
  let cellIndex;
  // 클릭한 가로 세로 인덱스 가져오기
  rows.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (target === cell) {
        rowIndex = i;
        cellIndex = j;
      }
    });
  });
  let hasWinner = false;
  // 가로
  if (
    rows[rowIndex][0].textContent === turn &&
    rows[rowIndex][1].textContent === turn &&
    rows[rowIndex][2].textContent === turn
  ) {
    hasWinner = true;
  }
  // 세로
  if (
    rows[0][cellIndex].textContent === turn &&
    rows[1][cellIndex].textContent === turn &&
    rows[2][cellIndex].textContent === turn
  ) {
    hasWinner = true;
  }
  // 대각선
  if (
    rows[0][0].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][2].textContent === turn
  ) {
    hasWinner = true;
  }
  if (
    rows[0][2].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][0].textContent === turn
  ) {
    hasWinner = true;
  }
  return hasWinner;
};
const callback = event => {
  // 칸에 글자가 있나?
  if (event.target.textContent) {
    return;
  }
  event.target.textContent = turn;
  // 승부 확인
  if (checkWinner(event.target)) {
    $result.textContent = `${turn}이 승리했습니다.`;
    $table.removeEventListener('click', callback);
    return;
  }
  // 무승부 일떄
  if (count === 9) {
    $result.textContent = `무승부 입니다.`;
    $table.removeEventListener('click', callback);
    return;
  }
  // 턴 넘기기
  turn = turn === 'O' ? 'X' : 'O';
};

// 2차원 배열 그리기
for (let i = 0; i < 3; i++) {
  const cells = [];
  const $tr = document.createElement('tr');
  for (let j = 0; j < 3; j++) {
    const $td = document.createElement('td');
    $tr.append($td);
    cells.push($td);
  }
  rows.push(cells);
  $table.append($tr);
  $table.addEventListener('click', callback);
}
$('body').append($table);
$('body').append($result);
