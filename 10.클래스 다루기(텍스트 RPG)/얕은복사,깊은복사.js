// const a =[];
// const b = `hello`;
// //객체 리터럴
// const c = {};

// const arr = [a,b,c];

// //참조
// const arr1 = arr;
// arr1[1] = `hi`;
// //arr 변경
// //arr = [a,hi,c]


// //얕은복사
// const arr2 = [...arr];
// arr2[1] = 'babo';
// console.log(arr2)
// //얕은 복사로 인하여 hi는 그대로 남아있음
// console.log(arr)


//깊은 복사
//1.
const a = `b`;
const d = a
a[0] = 2;
console.log(d)
//2.
const c = ['d',true,1];
const depp = JSON.parse(JSON.stringify(c));
c[0] = 'a';
console.log(depp);
//3.
const e = {g :'h'};
const deep = JSON.parse(JSON.stringify(e));
e[0] = 1;
console.log(e);
console.log(deep);

//5.
const n = {o:{p:'q'}};
const ndeep = JSON.parse(JSON.stringify(n));
console.log([n.o]);
console.log(ndeep);