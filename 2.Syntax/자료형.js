// 문자열은 작은따옴표 큰따옴표 백틱 => 우리는 백틱
const index = `Hello World!`;

//typeof는 자료형을 반환 해준다.
console.log(typeof(index));

//string
console.log(typeof(""));

//문자열 안에서 따옴표 표시하기.
console.log(`문자열 안에(")가 있어요!`);

//띄어쓰기 표현 (백틱 이용)
console.log(`안녕하세요
백           
재
원
입니다.`);
//한줄 띄기
console.log()

//\n활용하여 줄 변경
console.log('안녕하세요 백\n재\n원\n입니다.');

const lang = `문자열이 긴 경우에는` + ` 문자열을` + ` 나눈 뒤` + ` 다시 합칩니다.`;
console.log(lang);