// arr = ["rachel", "Yael", "Shirel"];

// Array.prototype.myFilter = function (callBack) {
//   let result = [];
//   this.forEach((val, indx, array) => {
//     if (callBack(val, indx, array)) {
//       result.push(val);
//     }
//   });
//   return result;
// };
// arr.myFilter((element) => element.length > 4);
// console.log(arr.myFilter((element) => element.length > 4));

arr = ["hello", "wor", "nice"];

Array.prototype.myFind = function (callBack) {
  let result = [];
  this.forEach((val, indx, array) => {
    if (callBack(val, indx, array)) {
      result.push(val);
    }
  });
  return result[0];
};

console.log(arr.myFind((element) => element.length > 3));
