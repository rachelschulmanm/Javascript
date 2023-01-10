// let password = function (password1) {
//   if (password1.length >= 8) {
//     console.log("strong");
//   } else {
//     console.log("week");
//   }
// };
// password("kjhgfddl");
//  Create a function that uses a ternary conditional expression.

// let password1 = "jfgfsdib";
// password1.length >= 8 ? console.log("strong") : console.log("week");

let password = function (password1) {
  if (password1.length >= 8 && /[A-Z]/.test(password1)) {
    console.log("very strong");
  } else if (password1.length == 7) {
    console.log("strong");
  } else {
    console.log("weak");
  }
};
password("kjdl");
