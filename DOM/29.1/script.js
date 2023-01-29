// const submit = document.querySelector(".submit");
// const email = document.querySelector(".email");
// const age = document.querySelector(".age");
// const check = document.querySelector("ul");
const addItemInput = document.querySelector(".addItem");
const itemUl = document.querySelector(".items");
const input = document.querySelector(".addItem");
input.addEventListener("keypress", function (e) {
  console.log(123);
});

addItemInput.addEventListener("click", function (e) {
  if (e.key === "Enter") {
    console.log(e.value);
    const newItemText = this.value;
    const newItem = document.createElement("li");
    newItem.innerText = newItemTex;
    itemUl.appendChild(newItem);
    // this.value = "";
  }
});
