const $ = selector => {
  return document.querySelector(selector);
};
const data = [];
for (let i = 0; i < 3; i++) {
  data.push([]);
}

$('body').append(document.createElement('table'));
for (let i = 0; i < 3; i++) {
  const $tr = document.createElement('tr');
  for (let j = 0; j < 3; j++) {
    $tr.append(document.createElement('td'));
  }
  $('table').append($tr);
}
