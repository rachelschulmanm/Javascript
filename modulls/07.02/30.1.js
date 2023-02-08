let input = document.querySelector("#input");
let btn = document.querySelector(".search");

let card = document.querySelector(".picture");

btn.addEventListener("click", showUsPicture);
// btn.addEventListener("onkeypress", showUsPicture);
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    showUsPicture();
  }
});

function showUsPicture() {
  //   preventDefault();
  fetch(`https://api.github.com/users/${input.value}`)
    // .then((result) => console.log(result.json()))
    .then((result) => result.json())
    // .then((nameOfPerson) => (name1.innerHTML = nameOfPerson.name))
    .then(
      (picture) =>
        (card.innerHTML = ` <img src="${picture.avatar_url}" alt="Avatar" style="width:10% ">
        <div class="container">
          <h4><a target="_blank" href="https://github.com/${input.value}"><b>${picture.name}</b></a></h4>
          <p>${picture.public_repos}</p>`)
    );
  input.focus();
  // input.value = "";
}
