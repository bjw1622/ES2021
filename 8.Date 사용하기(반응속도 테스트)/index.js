const $ = selector => {
  return document.querySelector(selector);
};

$('#screen').addEventListener('click', event => {
  if (event.target.classList.contains('waiting')) {
    //대기 화면
    // $('#screen').classList.remove('waiting');
    // $('#screen').classList.add('ready');
    $('#screen').classList.replace('waiting', 'ready');
    $('#screen').textContent = '초록색이 되면 클릭하세요';
  } else if (event.target.classList.contains('ready')) {
    //준비 화면
  } else if (event.target.classList.contains('now')) {
    //클릭 화면
  }
});
