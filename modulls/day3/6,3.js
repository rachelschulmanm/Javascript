let booo = (strings) => {
  let result = [];
  for (let string of strings) {
    result.push(string.length);
  }
  return result;
};
let output = booo(["boo", "doooo", "hoo", "ro"]);
console.log(output);

const getStingsLength = (arr) => arr.map((element) => element.length);
console.log(getStingsLength(["boo", "doooo", "hoo", "ro"]));
