let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let input = document.querySelector("input").value;
  if (input >= 18) {
    let form = document.querySelector("form");
    const p = document.createElement("p");
    let text = (p.innerText = "you ara over 18");
    form.appendChild(p);
  } else {
    let form = document.querySelector("body");
    const p = document.createElement("p");
    let text = (p.innerText = "you ara under 18");
    form.appendChild(p);
  }
});
