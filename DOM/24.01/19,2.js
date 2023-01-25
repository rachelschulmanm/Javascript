const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

// console.log(clear());
// const newDiv = document.createElement("p");
// newDiv.innerText = "Hello World";
// const startHere1 = document.querySelector("div ");

// startHere1.appendChild(newDiv);
// document.querySelectorAll("ul").style.font = "200px";
users.forEach((element) => {
  let all1 = element.firstName + " " + element.lastName;
  let all2 = [];
  all2.push(all1);

  const newDiv = document.createElement("li");
  newDiv.setAttribute("data-id", `${element.id}`);
  for (let i = 0; i < all2.length; i++) {
    newDiv.innerText = `${all2[i]}`;
    let ol = document.querySelector("ul");
    ol.appendChild(newDiv);
    // return newDiv;
  }
});
let body = document.querySelector("ul");
body.style.listStyleType = "none";
