// const array = [1,2,3,4,5,6,7,8,9,2,423,4,224,2,243,2]
// console.log(array[0]);
// console.log(array[1]);
// console.log(array.length);
// console.log(array[array.length - 1]);

// const target = [`가`,`나`,`다`,`라`,`마`]
// console.log(target)
// console.log(target.includes(`레`))
// console.log(target.indexOf(`마`))

// let i = 0;
// while (i < target.length){
//   console.log(target[i]);
//   i++
// }

// for(let i = 0; i < target.length; i++){
//   console.log(target[i])
// }

const arr = [`가`,`라`,`다`,`라`,`마`,`라`]
while(true){
  if(arr.includes('라')){
    let number = arr.indexOf('라');
    arr.splice(number,1)
  }
  else{
    break
  }
}
console.log(arr)