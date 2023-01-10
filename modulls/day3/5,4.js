let color = function (color1) {
  let color2 = color1.toLowerCase();
  switch (color2) {
    case "yellow":
    case "pink":
    case "orange":
      console.log("light color!");
      break;
    case "blue":
    case "purple":
    case "brown":
      console.log("dark color");
      break;
    default:
      console.log("Unknown color");
  }
};

color("Blue");
