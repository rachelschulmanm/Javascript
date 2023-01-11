let populations = [800000000, 600000000, 500000000, 40000000];
function percentAgeOfWorld2(a) {
  let population = 7900000000;
  const perecent = Math.round((a / population) * 100);
  const result = perecent.toFixed(0);
  return result;
}

let populationPercentages = (populations) => {
  let percentages = [];
  for (let population1 of populations) {
    percentages.push(percentAgeOfWorld2(population1));
  }
  return percentages;
};
console.log(populationPercentages(populations));
