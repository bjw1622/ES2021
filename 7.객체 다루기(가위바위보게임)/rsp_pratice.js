const $computer = document.querySelector("#computer");
const $score = document.querySelector("#score");
const $rock = document.querySelector("#rock");
const $scissors = document.querySelector("#scissors");
const $paper = document.querySelector("#paper");
const IMG_URL = "./rsp.png";
$computer.style.background = `url(${IMG_URL}) 0 0`;
$computer.style.backgroundSize = "auto 200px";

const rspX = {
  scissors: "0", // 가위
  rock: "-220px", // 바위
  paper: "-440px", // 보
  };

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
const clickButton = function(){
  clearInterval(intervalId);
  clickable = false;
  setTimeout(()=>{
    intervalId = setInterval(change,50);
    clickable = true;
  },1000);
}

$rock.addEventListener('click',clickButton);
$scissors.addEventListener('click',clickButton);
$paper.addEventListener('click',clickButton);
