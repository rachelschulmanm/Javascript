const startHere = document.querySelector(".start-here");
startHere.innerText = "main title";
// const startHere1 = document.querySelector("#secondUl ");

const newLi = document.createElement("li");
newLi.innerText = "sub title 4";
const startHere1 = document.querySelector("#secondUl ");

startHere1.appendChild(newLi);

// const newLi = document.createElement("li");
// newLi.innerText = "sub title 4";
const ul = document.querySelector("ul ");
const last = document.querySelector("#last ");
ul.removeChild(last);

// const title = document.querySelector(title);
// title.innerText = "“Master Of The Dom";
document.title = "Master Of The Dom";
const newP = document.querySelector("p");
newP.innerText = "HI";
