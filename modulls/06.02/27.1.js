// let num = function (num) {
//   const promise1 = new Promise((resolve, reject) => {
//     if (num > 10) resolve("greater than 10");
//     else reject(new Error(" less than 10"));
//   });

//   promise1
//     .then((num1) => console.log(num1))
//     .catch((err) => console.log(err.message));
// };
// num(12);
const isStringsArray = (arr) => arr.every((i) => typeof i === "string");

console.log(
  isStringsArray(["a", "b", "c"]),
  isStringsArray(["a", 12, "c"]),
  isStringsArray(["a", , "c"]),
  isStringsArray(["a", undefined, "c"]),
  isStringsArray(["a", "b", 1])
);
