let array = ["banana", "apple", "peach"];
// let array = ["banana", 12, "peach"];

let newArray = [];
function main(numArr) {
  const promise1 = new Promise((resolve, reject) => {
    let arrIsOnlyStrings = (numArr) =>
      numArr.every((i) => {
        typeof i === "string";
      });
    if (arrIsOnlyStrings) {
      resolve(numArr);
    } else reject(new Error(" It is not a string"));
  });

  promise1
    .then((num1) => {
      console.log(num1);
      makeAllCaps(numArr);
      console.log(sortWords(newArray));
    })
    .catch((err) => console.log(err.message));
}
main(array);
function makeAllCaps(arr) {
  arr.forEach((element) => {
    newArray.push(element.toUpperCase());
  });
  return newArray;
}
// console.log(makeAllCaps(array));

function sortWords(arr) {
  return newArray.sort();
}
