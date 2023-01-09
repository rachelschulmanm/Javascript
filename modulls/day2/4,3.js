let john = [89, 12, 133];
let mike = [116, 94, 123];
let Mary = [97, 134, 105];
const arr = [1, 2, 3];
const average = john.reduce((a, b) => a + b, 0) / arr.length;
console.log(average);
const averageM = mike.reduce((a, b) => a + b, 0) / arr.length;
console.log(averageM);
const averageMa = Mary.reduce((a, b) => a + b, 0) / arr.length;
console.log(averageMa);

if (average > averageM && average > averageMa) {
  console.log(`Johns average  is ${average} `);
} else if (averageM > average && averageM > averageMa) {
  console.log(`Mike average  is ${averageM} `);
} else {
  console.log(`Mary average  is ${averageMa} `);
}
