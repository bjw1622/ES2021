const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

const ballArray = Array(45).fill().map((element,index)=>{return index+1});
console.log(ballArray);
const shuffle = [3,4,5,6,7,8,9,10];

$result.addEventListener(`click`,()=>{
  setTimeout(()=>{
$result.appendChild(insert(0));
  },1000)
setTimeout(()=>{
$result.appendChild(insert(1));
  },2000)
setTimeout(()=>{
$result.appendChild(insert(2));
  },3000)
      setTimeout(()=>{
$result.appendChild(insert(3));
  },4000)
        setTimeout(()=>{
$result.appendChild(insert(4));    
  },5000)
          setTimeout(()=>{
$result.appendChild(insert(5));
   },6000)
   setTimeout(()=>{
    $bonus.appendChild(insert(6));
       },7000)
})


function insert (number){
  const $ball = document.createElement('div');
  $ball.setAttribute('class','ball');
  $ball.innerText = `${shuffle[number]}`;
  return $ball
}
