const $ = selector => document.querySelector(selector);

// 자바스크립트 데이터와 화면이 같이 바뀌어야 한다!

// 이름 입력 후 화면 전환
$('#start-screen').addEventListener('submit', event => {
  event.preventDefault();
  const name = event.target['name-input'].value;
  $('#start-screen').style.display = 'none';
  $('#game-menu').style.display = 'block';
  $('#hero-name').textContent = name;
});
