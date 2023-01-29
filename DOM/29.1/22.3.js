const box = document.querySelector("p");
const h2 = document.querySelector("h2");

const placeMessage = document.querySelector("b");
let wrong = document.createElement("h4");
wrong.innerHTML = "Nope, wrong letter";
let right = document.createElement("h4");
right.innerHTML = "Right letter";
right.style.color = "green";
wrong.style.color = "red";

const letters = [
  "A",
  "B",
  //   "C",
  //   "D",
  //   "E",
  //   "F",
  //   "G",
  //   "H",
  //   "I",
  //   "J",
  //   "K",
  //   "L",
  //   "M",
  //   "N",
  //   "O",
  //   "P",
  //   "Q",
  //   "R",
  //   "S",
  //   "T",
  //   "U",
  //   "V",
  //   "W",
  //   "X",
  //   "Y",
  //   "Z",
];
let letterChosen = document.querySelector("#letterChosen");
const yesBtn = document.querySelector("#yesBtn");
yesBtn.style.border = "3px solid #333";
yesBtn.style.width = "50px ";
const randomLetter = letters[Math.floor(Math.random() * letters.length)];

box.style.border = "3px solid #333";
box.style.width = "30px ";

// var randomLetter = letters[Math.floor(Math.random() * items.length)];
letterChosen.addEventListener("keyup", function () {
  console.log(randomLetter);
  console.log(letterChosen.value);

  if (randomLetter === letterChosen.value) {
    placeMessage.appendChild(right);
    box.innerHTML = randomLetter;
    // placeMessage.removeChild(wrong);
    h2.disabled = true;
    console.log(152);
    return;
  } else if (randomLetter !== letterChosen.value) {
    placeMessage.appendChild(wrong);
    letterChosen.value = " ";
  }
});
yesBtn.addEventListener("click", function () {
  console.log(125);
});
