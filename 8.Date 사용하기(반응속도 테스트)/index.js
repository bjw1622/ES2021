const $ = selector => {
  return document.querySelector(selector);
};

let startTime;
let endTime;
let total = 0;
let count = 0;

$('#screen').addEventListener('click', event => {
  //대기 화면
  if (event.target.classList.contains('waiting')) {
    // $('#screen').classList.remove('waiting');
    // $('#screen').classList.add('ready');
    $('#screen').classList.replace('waiting', 'ready');
    $('#screen').textContent = '초록색이 되면 클릭하세요';
    setTimeout(() => {
      $('#screen').classList.replace('ready', 'now');
      $('#screen').textContent = '클릭하세요!!';
      // 시작 시간 재기
      startTime = new Date().getTime();
    }, Math.floor(Math.random() * 1000) + 2000); // 2초 ~ 3초 사이에 변환
  }
  //준비 화면
  else if (event.target.classList.contains('ready')) {
    $('#screen').classList.replace('ready', 'waiting');
    $('#screen').textContent = '성급하게 클릭했습니다. ';
  }
  //클릭 화면
  else if (event.target.classList.contains('now')) {
    // 끝 시간 재기
    endTime = new Date().getTime();
    let diff = endTime - startTime;
    total += diff;
    count += 1;
    startTime = null;
    endTime = null;
    $('#result').textContent = `현재 ${diff}ms, 평균:${total / count}ms`;
    $('#screen').classList.replace('now', 'waiting');
    $('#screen').textContent = '클릭해서 시작하세요.';
  }
});
