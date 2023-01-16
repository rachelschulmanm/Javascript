const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const doubleValues = numbers.map(function (n) {
//   return n * 2;
// });
// console.log(doubleValues);

// 2. const onlyEvenValues = (arr) => {
//   const evensArray = [];
//   arr.forEach(function (num) {
//     num % 2 === 0 ? evensArray.push(num) : "";
//   });
//   return evensArrsy;
// };
// console.log(onlyEvenValues(numArray));

const showFirstAndLast = numbers.map(function (n) {
  return n[2];
});
console.log(showFirstAndLast);

// const str = ["as", "sdf", "dfg", "fghhj"];
// const vowelCount = str.map(function (s) {
//   return ;
// });

// 5. const str = ["as", "sdf", "dfg", "fghhj"];
// const capitalize = str.map(function (s) {
//   return s.toUpperCase();
// });

// console.log(capitalize);

//6. function caesarCipher(s, k) {
//   var n = 26; // alphabet letters amount
//   if (k < 0) {
//     return caesarCipher(s, k + n);
//   }
//   return s
//     .split("")
//     .map(function (c) {
//       if (c.match(/[a-z]/i)) {
//         var code = c.charCodeAt();
//         var shift =
//           code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : 0;
//         return String.fromCharCode(((code - shift + k) % n) + shift);
//       }
//       return c;
//     })
//     .join("");
// }
// console.log(caesarCipher("rachel", 1));

// const str = ["as", "sdf", "dfg", "fghhj"];
// const swapCase = str.map(function (s) {
//   return;
// });

// console.log(swapCase);
