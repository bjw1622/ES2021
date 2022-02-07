const $ = selector => {
  return document.querySelector('selector');
};

const numbers = [];
for (let n = 1; n < 10; n += 1) {
  numbers.push(n);
}

const answer = [];
for (let n = 0; n < 4; n += 1) {
  const index = Math.floor(Math.random() * (9 - n));
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}

console.log(answer);
