const $ = (selector) => document.querySelector(selector);
let numOne = "";
let operator = "";
let numTwo = "";
$("#num-0").addEventListener("click", () => {
  numbering(0);
});
$("#num-1").addEventListener("click", () => {
  numbering(1);
});
$("#num-2").addEventListener("click", () => {
  numbering(2);
});
$("#num-3").addEventListener("click", () => {
  numbering(3);
});
$("#num-4").addEventListener("click", () => {
  numbering(4);
});
$("#num-5").addEventListener("click", () => {
  numbering(5);
});
$("#num-6").addEventListener("click", () => {
  numbering(6);
});
$("#num-7").addEventListener("click", () => {
  numbering(7);
});
$("#num-8").addEventListener("click", () => {
  numbering(8);
});
$("#num-9").addEventListener("click", () => {
  numbering(9);
});
$("#plus").addEventListener("click", () => {});
$("#minus").addEventListener("click", () => {});
$("#divide").addEventListener("click", () => {});
$("#multiply").addEventListener("click", () => {});
$("#calculate").addEventListener("click", () => {});
$("#clear").addEventListener("click", () => {});

function numbering(num) {
  if (operator) {
    //비어 있지 않다
    numTwo += "num";
  } else {
    // 비어있다
    numOne += "num";
  }
}
