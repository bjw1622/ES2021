// 45개의 숫자 생성
const array = Array(45)
  .fill()
  .map((v, i) => i + 1);

const shuffle = [];
// 7개 숫자 중복없이 랜덤으로 뽑기
for (let i = 0; i < 7; i++) {
  const count = Math.floor(Math.random() * array.length);
  shuffle.push(array[count]);
  array.splice(count, 1);
}
