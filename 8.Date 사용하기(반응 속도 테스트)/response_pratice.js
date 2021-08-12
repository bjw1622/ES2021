const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');
const $top = document.querySelector('#top');
$screen.addEventListener('click',gameClick);
let startTime;
let endTime;
let setId;
const average =[]; 
let total = 0;
function gameClick (){
  if($screen.classList.contains('waiting')){
    $screen.classList.replace(`waiting`,`ready`);
    $screen.textContent="초록색때 클릭하세요."
    setId = setTimeout(()=>{
      //start시간
      startTime = new Date();
      $screen.textContent="클릭하세요!!!!!!!"
      $screen.classList.replace('ready','now');
    },parseFloat(parseFloat(Math.random()*1000 + 2000)));
  }else if($screen.classList.contains('ready')){
    alert('너무 성급하게 클릭했습니다.');
    clearTimeout(setId);
    $screen.classList.replace('ready','waiting');
    $screen.textContent = `클릭해서 시작하세요`;
  }else if($screen.classList.contains('now')){
    //end 시간
    endTime = new Date();
    let diff = endTime - startTime;
    average.push(diff);
    total += diff;
    $result.textContent = `${diff}ms, 평균${parseInt(total / average.length)}ms`;
    $top.textContent = `상위 결과 TOP 5 결과 : ${average.sort().slice(0,5)}`;
    $screen.textContent = "클릭해서 시작하세요."
    $screen.classList.replace(`now`,'waiting');
  }
}
