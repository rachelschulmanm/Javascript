let btn = document.querySelector(".showJoke");
let joke = document.querySelector(".joke");

btn.addEventListener("click", showUsTheJoke);
function showUsTheJoke() {
  fetch("https://api.jokes.one/jod")
    .then((result) => result.json())

    .then((data) => data.contents.jokes[0].joke)
    .then((joke1) => (joke.innerHTML = `${joke1.title} <br> ${joke1.text}`));
}
