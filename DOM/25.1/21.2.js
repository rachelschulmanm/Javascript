let btn1 = document.querySelector("#plus");
let btn2 = document.querySelector("#minus");

btn1.addEventListener("click", function () {
  let text = document.querySelector("h1");
  text.style.fontSize = "3rem";
});
btn2.addEventListener("click", function () {
  let text = document.querySelector("h1");
  text.style.fontSize = "1.5rem";
});
