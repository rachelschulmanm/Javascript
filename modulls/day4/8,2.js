const myCountry = {
  country: "england",
  capital: "london",
  language: "english",
  population: "6 million",
  neighbours: ["cohen", "levi"],
  describe: function () {
    console.log(`${this.country} has ${this.country} people, their mother tongue is ${this.country}, they
    have ${this.country} countries and a capital called
    ${this.capital}`);
  },
  checkIsland: function () {
    this.isisland = this.neighbours.length == 0 ? true : false;
  },
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isisland);
