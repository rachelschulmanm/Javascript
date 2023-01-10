let countryToLiveIn = function (language, isIsland, population, country) {
  if (language == "English" && isIsland && population < 50000000) {
    console.log(`You
        should live in ${country}`);
  } else {
    console.log(` does not meet
    your criteria ${country}  `);
  }
};

countryToLiveIn("English", true, 450000, "England");
