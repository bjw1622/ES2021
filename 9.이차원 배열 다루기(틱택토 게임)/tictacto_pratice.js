let turn = "O";
const rows = [];
const $result = document.createElement("div");
const $table = document.createElement("table");

const callback = (event) => {
  //칸이 이미 채워져있는가?
  if (event.target.textContent) return;

  event.target.textContent = turn;
  const hasWinner = checkWinner(event.target);
  //승자가 있으면
  if (hasWinner) {
    $result.textContent = `${turn}님이 승리`;
    $table.removeEventListener("click", callback);
    return;
  }
  //무승부
  let draw = true;
  rows.forEach((a, b) => {
    a.forEach((c, d) => {
      //비어있으면
      if (!c.textContent) {
        draw = false;
      }
    });
  });
  if (draw) {
    $result.textContent = "무승부";
    return;
  }
  if (turn === "O") {
    //승자가 없으면
    turn = "X";
  } else {
    turn = "O";
  }
};

const checkWinner = (target) => {
  const rowIndex = target.parentNode.rowIndex;
  const cellIndex = target.cellIndex;
  console.log(rowIndex, cellIndex);
  //console.log(target.parentNode.children);
  //console.log(Array.from(target.parentNode.children).indexOf(target));

  let hasWinner = false;
  //가로줄 검사
  if (
    rows[rowIndex][0].textContent === turn &&
    rows[rowIndex][1].textContent === turn &&
    rows[rowIndex][2].textContent === turn
  ) {
    hasWinner = true;
  }
  //세로줄 검사
  if (
    rows[0][cellIndex].textContent === turn &&
    rows[1][cellIndex].textContent === turn &&
    rows[2][cellIndex].textContent === turn
  ) {
    hasWinner = true;
  }
  //대각선 검사
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

for (let i = 0; i < 3; i++) {
  const $tr = document.createElement("tr");
  const cells = [];
  for (let i = 0; i < 3; i++) {
    const $td = document.createElement("td");
    cells.push($td);
    $tr.append($td);
  }
  $table.append($tr);
  rows.push(cells);
  $table.addEventListener("click", callback);
}
document.body.append($table);
document.body.append($result);
console.log(rows);