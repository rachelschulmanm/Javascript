let letter = prompt("score:");
if ((letter > 0) & (letter <= 64)) {
  console.log("F");
} else if (letter >= 65 && letter <= 69) {
  console.log("D");
} else if ((letter >= 70) & (letter <= 79)) {
  console.log("C");
} else if ((letter >= 80) & (letter <= 89)) {
  console.log("B");
} else if ((letter >= 90) & (letter <= 100)) {
  console.log("A");
}
