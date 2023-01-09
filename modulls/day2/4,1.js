let numSiblings = prompt("How many siblings do you have?");
let numInt = parseInt(numSiblings);
if (numInt === 1) {
  console.log("1 sibling");
} else if (numInt > 1) {
  console.log("'More than 1 sibling");
} else {
  console.log("'No siblings");
}
