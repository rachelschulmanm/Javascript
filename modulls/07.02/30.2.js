// let input = document.querySelector("#input");
let btn = document.querySelector(".search");
let input = document.querySelector("#input");
let card = document.querySelector(".picture");
let name1 = document.querySelector(".name1");

btn.addEventListener("click", showUsPicture);
// // btn.addEventListener("onkeypress", showUsPicture);
// input.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     showUsPicture();
//   }
// });

function showUsPicture() {
  //   preventDefault();
  //   fetch("http://www.omdbapi.com/?i=tt3896198&apikey=baaa954c")
  fetch(
    `http://www.omdbapi.com/?t=${input.value.replace(" ", "+")}&apiKey=baaa954c`
  )
    .then((result) => result.json())
    // .then((result) => console.log(result.json()))
    .then(
      (obj) =>
        (name1.innerHTML = ` <img src="${obj.Poster}}" alt="Avatar" style="width:10% "><br>
      <u>actors:</u>  ${obj.Actors}<br> <u>Genre:</u>  ${obj.Genre}<br> <u>Year:</u> ${obj.Year}<br> <u>Plot:</u> ${obj.Plot}<br> <u>Director:</u> ${obj.Director}<br>  <u>Title:</u> ${obj.Title}<br> ${obj.Ratings}
    }`)
    );

  input.focus();
  // input.value = "";
}
