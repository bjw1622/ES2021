const calculate = (command,a,b) =>{
  if (command === "+"){
    return a+b;
  }
  else if (command === "-"){
    return a-b;
  }
  else if (command === "/"){
    return a/b;
  }
  else if (command === "*"){
    return a*b;
  }
  else if (command === "%"){
    return a%b;
  }
  else{
    console.log('잘못된 계산식을 입력하셨습니다.')
  }

}
console.log(calculate("+",1,2))

