const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

const descendingToAscending = foods.sort();
console.log(descendingToAscending);

const descendingFromAscending = foods.sort().reverse();
console.log(descendingFromAscending);

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];
const lower = foodsWithUpperCase.map((element) => {
  return element.toLowerCase();
});

// console.log(lower);
const descendingToAscendingUpperCase = lower.sort();

console.log(descendingToAscendingUpperCase);

const descendingFromAscendingUpperCase = lower.sort().reverse();

console.log(descendingToAscendingUpperCase);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const longestWord = words.sort((a, b) => a.length - b.length).reverse();
console.log(longestWord);
