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
