function a() {
  console.log(`안녕`);
}

a();

function b() {
  return 10;
}

console.log(b());

function a(parameter) {
  console.log(parameter);
}
a("argument");

function a(w, x, y, z) {
  console.log(w, x, y, z);
  console.log(arguments);
}

a(1, 2, 3);

let d = (x, y, z) => {
  return x * y * z;
};

console.log(d(1, 2, 3));

const arr = [`가`, `라`, `다`, `라`, `마`, `라`];

while (true) {
  let deleteArr = arr.indexOf("라");

  if (deleteArr === -1) {
    break;
  }
  arr.splice(deleteArr, 1);
}
console.log(arr);
