const jay = {
  name: "백재원",
  year: 1997,
  month: 6,
  day: 18,
  gender: "M",
};

// console.log(jay.name);
// console.log(jay['name']);
// console.log(jay.dsda);
// // 없는 속성 추가하기.
// jay.weight = 180;
// console.log(jay.weight);

// jay.sda = 10;
// console.log(jay.sda);

// delete jay.sda;
// console.log(jay);

// console.log(jay.name); //대부분 온점을 활용하여 접근
// console.log(jay[`name`]);
// const target = "name";
// // console.log(jay["target"]);
// console.log(jay[target]);

// jay.name = "jay";

// delete jay.day; // 속성 삭제!
// console.log(jay);

// const m = {
//   met: function (value) {
//     console.log(value);
//   },
// };
// m.met("test");

// const a = { 1: "1" };
// const b = { 1: "1" };

// console.log(a === b);

// 같은 객체인지 비교하기 위해선 기존 객체를 변수에 저장해야함.
// const a = { name: "jay" };
// const b = [1, 2, a];
// if (a === b[2]) {
//   console.log(true);
// }

//FIX객체를 저장한 변수를 다른 변수에 대입하면 두 변수 모두 같은 객체를 저장하는 셈.
// a 와 b가 같은 객체를 참조하고 있다.
// 객체에 해당하는 경우만 참조가 발생한다.
// const a = { name: `백재원`, age: 26 };
// const b = a;
// a.name = `jay`;
// console.log(b.name);
// const a = [1, 2, 3];
// const b = a;
// a[0] = 11;
// console.log(b);

//FIX 1분 퀴즈
const zerocho = {
  name: {
    first: `현영`,
    last: `조`,
  },
  gender: `m`,
};

console.log(zerocho.name.last);
