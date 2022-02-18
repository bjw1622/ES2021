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

const scoreTable = {
  scissors: 1,
  rock: 0,
  paper: -1,
};

let computerChoice = `scissors`;

let changeComputerHand = () => {
  if (computerChoice === 'scissors') {
    //가위면 바위로
    computerChoice = 'rock';
  } else if (computerChoice === 'rock') {
    //바위면 보로
    computerChoice = 'paper';
  } else if (computerChoice === 'paper') {
    // 보면 가위로
    computerChoice = 'scissors';
  }
  $('#computer').style.background = `url(${img}) ${rsp[computerChoice]} 0`;
  $('#computer').style.backgroundSize = `auto 200px`;
};
let result = 0;
let intervalId = setInterval(changeComputerHand, 50);

// 연달아 클릭하면 setTimeout이 여러번 실행
// setTimeout은 아무도 클리어를 하지 않는다

// clickButton 연달아서 5번 호출, 1번 인터벌, 2번, 3번, 4번, 5번
// intervalId에는 5번째꺼만 저장
// 그 다음 버튼 클릭시에는 5번만 취소되고 1번, 2번, 3번, 4번은 계속 돌게 됨

// 또 다른 방법으로 클릭 후 버튼 클릭이 안되도록 remove해주고 1초 후에 다시 addEventListner를 적용
// 또 다른 방법으로 flag 변수를 하나 추가해서 if(flag)일때만 실행 가능하도록 코드 추가
const clickButton = event => {
  // 클릭 하자마자 실행
  clearInterval(intervalId);

  // 점수 계산 및 화면 표시
  let myChoice = 'test';
  if (event.target.textContent === '가위') {
    myChoice = 'scissors';
  } else if (event.target.textContent === '바위') {
    myChoice = 'rock';
  } else if (event.target.textContent === '보') {
    myChoice = 'paper';
  }
  const myScore = scoreTable[myChoice];
  const computerScore = scoreTable[computerChoice];
  const diff = myScore - computerScore;
  if (diff === 2 || diff === -1) {
    result += 1;
  } else if (diff === 1 || diff === -2) {
    result -= 1;
  }
  $('#score').textContent = `${result}`;

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
