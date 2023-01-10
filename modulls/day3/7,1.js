let chars = ["A", "B", "A", "C", "B"];

let uniqueChars = chars.filter((element, index) => {
  return chars.indexOf(element) === index;
});

console.log(uniqueChars);
