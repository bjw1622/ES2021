const jay = {
  name : '백재원',
  year : 1997,
  month : 6,
  day : 18,
  gender : "M",
}

console.log(jay.name);
console.log(jay['name']);
console.log(jay.dsda);
// 없는 속성 추가하기.
jay.weight = 180;
console.log(jay.weight);

jay.sda = 10;
console.log(jay.sda);


delete jay.sda;
console.log(jay);