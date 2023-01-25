let text = document.querySelector("textarea").value;
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  if (text.length < 100) {
    let form = document.querySelector("form");
    const p = document.createElement("p");
    let text = (p.innerText = "it is not enough");
    form.appendChild(p);
  }
});
