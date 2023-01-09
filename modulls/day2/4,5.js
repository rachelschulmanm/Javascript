let leap = 2500;

if ((leap % 4 === 0) & (leap % 100 !== 0 || leap % 400 === 0)) {
  console.log("It is indeed a leap year");
} else {
  console.log("This is not a leap year.");
}
