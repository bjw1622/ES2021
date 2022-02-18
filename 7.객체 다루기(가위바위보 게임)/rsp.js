const $ = selector => {
  return document.querySelector(selector);
};

const img = './rsp.png';
$('#computer').style.background = `url(${img}) 0px 0`;
$('#computer').style.backgroundSize = `auto 200px`;

// 객체를 쓰는 이유는 그룹화
const rsp = {
  scissors: `0`,
  rock: '-220px',
  paper: `-448px`,
};

let coord = `scissors`;

let changeComputerHand = () => {
  if (coord === 'scissors') {
    //가위면 바위로
    coord = 'rock';
  } else if (coord === 'rock') {
    //바위면 보로
    coord = 'paper';
  } else if (coord === 'paper') {
    // 보면 가위로
    coord = 'scissors';
  }
  $('#computer').style.background = `url(${img}) ${rsp[coord]} 0`;
  $('#computer').style.backgroundSize = `auto 200px`;
};

let intervalId = setInterval(changeComputerHand, 50);

// 연달아 클릭하면 setTimeout이 여러번 실행
// setTimeout은 아무도 클리어를 하지 않는다

// clickButton 연달아서 5번 호출, 1번 인터벌, 2번, 3번, 4번, 5번
// intervalId에는 5번째꺼만 저장
// 그 다음 버튼 클릭시에는 5번만 취소되고 1번, 2번, 3번, 4번은 계속 돌게 됨

// 또 다른 방법으로 클릭 후 버튼 클릭이 안되도록 remove해주고 1초 후에 다시 addEventListner를 적용
const clickButton = () => {
  // 클릭 하자마자 실행
  clearInterval(intervalId);
  setTimeout(() => {
    // 클릭 후 1초 후에 실행
    // 비동기 코드는 항상 조심해야 함.
    clearInterval(intervalId);
    intervalId = setInterval(changeComputerHand, 50);
  }, 1000);
};

$('#rock').addEventListener('click', clickButton);
$('#scissors').addEventListener('click', clickButton);
$('#paper').addEventListener('click', clickButton);
