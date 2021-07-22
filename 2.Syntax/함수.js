function a(){
  console.log(`안녕`);
}

a();

function b(){
  return 10;
}

console.log(b());

function a(parameter){
  console.log(parameter);
}
a('argument');

function a(w,x,y,z){
  console.log(w,x,y,z);
  console.log(arguments);
}

a(1,2,3);

let d = (x,y,z) => {
  return x*y*z;
}

console.log(d(1,2,3));