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

let coord = `0px`;

let chageComputerHand = () => {
  if (coord === rsp.scissors) {
    //가위면 바위로
    $('#computer').style.background = `url(${img}) ${rsp.rock} 0`;
    $('#computer').style.backgroundSize = `auto 200px`;
    coord = rsp.rock;
  } else if (coord === rsp.rock) {
    //바위면 보로
    $('#computer').style.background = `url(${img}) ${rsp.paper} 0`;
    $('#computer').style.backgroundSize = `auto 200px`;
    coord = rsp.paper;
  } else {
    // 보면 가위로
    $('#computer').style.background = `url(${img}) ${rsp.scissors} 0`;
    $('#computer').style.backgroundSize = `auto 200px`;
    coord = rsp.scissors;
  }
};

setInterval(chageComputerHand, 50);
