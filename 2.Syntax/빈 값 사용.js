// 자료형 => 문자열, 숫자, 불, undefined, null, Object, Symbol

// undefined => 반활할 결괏값이 없다. 이 말은 즉 undefined를 반환했다.
console.log(!!undefined);
console.log(undefined ===  false);
console.log(0 == false);

// null은 빈 값을 의미한다.
console.log(null == undefined);
console.log(null === undefined);

// null의 자료형을 typeof로 확인해 보면 "버그"가 존재한다.
console.log(typeof(null));
// Object가 나오는데. 이건 버그다. null 값을 확인하려면 ===을 사용하자.
