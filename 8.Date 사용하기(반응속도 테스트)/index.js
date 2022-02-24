const $ = selector => {
  return document.querySelector(selector);
};

$('#screen').addEventListener('click', event => {
  console.log(event.target.classList.contains('waiting'));
});
