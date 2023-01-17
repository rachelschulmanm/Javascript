const max = [60, 6, 25, 80, 7, 60, 109];
const checkMax = max.reduce((max, currVal) => {
  return Math.max(max, currVal);
});
console.log(checkMax);

const max1 = max.filter((a) => a % 2 === 0);
const sumOfEven = max1.reduce((sum, currVal) => {
  return sum + currVal;
});
console.log(sumOfEven);

const average = max.reduce((sum, currVal) => {
  return (sum + currVal) / max.length;
});
console.log(average);
