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
const clickButton = () => {
  clearInterval(intervalId);
  let setId = setTimeout(() => {
    intervalId = setInterval(changeComputerHand, 50);
  }, 1000);
};

$('#rock').addEventListener('click', clickButton);
$('#scissors').addEventListener('click', clickButton);
$('#paper').addEventListener('click', clickButton);
