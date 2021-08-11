const $computer = document.querySelector("#computer");
const $score = document.querySelector("#score");
const $rock = document.querySelector("#rock");
const $scissors = document.querySelector("#scissors");
const $paper = document.querySelector("#paper");
const IMG_URL = "./rsp.png";
$computer.style.background = `url(${IMG_URL}) -220px 0`;
$computer.style.backgroundSize = "auto 200px";

const rspX = {
  scissors: "0", // 가위
  rock: "-220px", // 바위
  paper: "-440px", // 보
  };

const rspComputer = {
  scissors:0,
  rock:1,
  paper:2,
}
  let computerChoice = "scissors";
  const change = () => {
    if (computerChoice === "rock") {
      // 바위면
      computerChoice = "scissors";
    } else if (computerChoice === "scissors") {
      // 가위면
      computerChoice = "paper";
    } else if (computerChoice === "paper") {
      // 보면
      computerChoice = "rock";
    }
    $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
    $computer.style.backgroundSize = "auto 200px";
  };
let intervalId = setInterval(change, 50);
let clickable = true;
let count = 0;
const rspCount = {
  가위:0,
  바위:1,
  보:2,
};
let score = 0;
let answer = '';
const clickButton = function(event){
  const userTurn = rspCount[event.target.textContent];
  const computerTurn = rspComputer[computerChoice];
  const diff = userTurn - computerTurn;
  clearInterval(intervalId);
  clickable = false;
  count += 1;
  if([2,-1].includes(diff)){
    score -= 1
    answer= "패배하였습니다";
  }else if([1,-2].includes(diff)){
    score -= 1
    answer= "패배하였습니다";
    score += 1
    answer = "축하합니다. 이겼습니다";
  }else{
    answer= "비겼습니다";

  }
  $score.innerHTML = `${count}판 play 했습니다.<br/> computer : ${computerChoice}, user : ${event.target.textContent}
  <br/> 결과 : ${answer}, 점수 : ${score} `;
  setTimeout(()=>{
    intervalId = setInterval(change,50);
    clickable = true;
  },1000);
}

$rock.addEventListener('click',clickButton);
$scissors.addEventListener('click',clickButton);
$paper.addEventListener('click',clickButton);

