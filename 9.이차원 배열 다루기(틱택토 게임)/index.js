const $ = selector => {
  return document.querySelector(selector);
};
const data = [];

let turn = 'O';
for (let i = 0; i < 3; i++) {
  data.push([]);
}

// 2차원 배열 그리기
$('body').append(document.createElement('table'));
for (let i = 0; i < 3; i++) {
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
    });
    $tr.append($td);
  }
  $('table').append($tr);
}
