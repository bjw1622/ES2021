// 중첩 반복문
for(let i =0; i < 10; i++){
  for(let j = 0; j < 10; j++){
    console.log(i,j);
  }
}

//continue문 
let i = 0;
while (i < 10){
  i++;
  if(i % 2 === 0){
    continue;
  }
  console.log(i);
}

//구구단을 출력하되, 결과에 짝수가 하나도 나오지 않도록
//짝수를 곱하면 x

for(let i = 3; i < 10; i++){
  if (i % 2 === 0){
    continue;
  }
  for(let j = 1; j <10; j++){
    if(j % 2 === 0){
      continue;
    }
    console.log(i,"x",j,`=`,i*j);
  }
}

//별찍기
for(let i=1; i < 6; i++){
  console.log(`*`.repeat(i));
}


for(let i=1; i < 6; i++){
    console.log(`*`.repeat(6-i));
  }

for(let i=1; i < 6; i++){
    console.log(`*`.repeat(2*i-1));
  }

for(let i=5; i >= 1; i--){
    console.log(`*`.repeat(2*i-1));
}

for(let i=0; i < 5; i++){
  console.log(` `.repeat(i),`*`.repeat(5-i));
}

for(let i=5; i >= 1; i--){
  console.log(` `.repeat(i),`*`.repeat(6 - i));
}

for(let i = 0; i < 5; i++){
  console.log(` ` .repeat((4 - i)),`*`.repeat(2*i+1));
}