function percentAgeOfWorld1(country, population) {
  let population1 = 7900000000;
  const perecent = Math.round((population / population1) * 100);
  const result = perecent.toFixed(0);
  console.log(`${country} has ${population} million people, so it is about ${result} ${"%"} of the world
  population `);
}

percentAgeOfWorld1("chaina", 150000000);
percentAgeOfWorld1("Israel", 1100000000);
percentAgeOfWorld1("england", 1200000000);

function percentAgeOfWorld2(a) {
  let population = 7900000000;
  const perecent = Math.round((a / population) * 100);
  const result = perecent.toFixed(2);
  return result;
}
