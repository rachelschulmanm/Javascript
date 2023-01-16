const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
let com = function (list, list1) {
  const cummonWordArray = [];
  for (
    let i = 0;
    i < list.length;
    i++ //pointer array1
  ) {
    const currentWord = list[i];

    cummonWordArray.push([currentWord]);
    for (let j = 0; j < list1.length; j++) {
      if (currentWord == list1[j]) {
        console.log(cummonWordArray);
      }
    }
  }
  return cummonWordArray;
};
console.log(com(food, food1));
