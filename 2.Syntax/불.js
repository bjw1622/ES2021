// 불값은 따옴표  없이
console.log(true);
console.log(typeof(true));

// 같다  다르다
console.log(5 == 5);
console.log(5 != 5);

// NaN끼리 비교하면 같은 값끼리 비교시 유일하게 false값이 나온다.
console.log(NaN == NaN);

// true = 1  false = 0
console.log(true > false);

// 사전 순
console.log('a' > 'b');

// 문자의 번호 알아보기
console.log(`a`.charCodeAt());
console.log(`b`.charCodeAt());
console.log(`bsad`.charCodeAt());

// 다른 자료형 비교(문자열이 숫자로 변환된다.)
console.log(`5`> 3);
// 문자열은 숫자로 바뀌면 NaN이 된다. NaN과의 비교는 0이된다.
console.log(`abc` >  5);

//  == , ===의 차이 이해하기
console.log(`1` == 1); // 자료형은 다르지만 값이 같아서 같다고 판단.
console.log(`1` === 1); // 자료형 + 값이 모두 같아야 같다고 판단.

// 논리 연산자 사용하기.
console.log(10 > 5 && 10 > 7); //and
console.log(10 > 12 || 10 > 7); // or

//다른 자료형을 불값으로 변환하기. !! => false가 두번이므로 true
console.log(!!`a`);

//형 변환했을때 false가 되는 값.
// 문자열 => ''(빈 문자열)
// 자료형 => 0
// 불리언 => false
// null, undefined, NaN, document.all



