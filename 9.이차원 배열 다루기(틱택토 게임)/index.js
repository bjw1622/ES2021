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
const { body, createElement } = document;
const $result = document.createElement('div');

let turn = 'O';
const rows = [];
// 2차원 배열 그리기
$('body').append(document.createElement('table'));
for (let i = 0; i < 3; i++) {
  const cells = [];
  const $tr = document.createElement('tr');
  for (let j = 0; j < 3; j++) {
    const $td = document.createElement('td');
    $td.addEventListener('click', event => {
      // 칸에 글자가 있나?
      if (event.target.textContent) {
        return;
      }
      event.target.textContent = turn;
      // 승부 확인

      // 턴 넘기기
      if (turn === 'O') {
        turn = 'X';
      } else if (turn === 'X') {
        turn = 'O';
      }
      cells.push(event.target.textContent);
    });
    $tr.append($td);
  }
  rows.push(cells);
  $('table').append($tr);
}
$('body').append($result);
console.log(rows);
